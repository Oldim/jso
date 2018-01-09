USE DeSchop;

SET sql_mode='only_full_group_by';

SELECT offertes.*, planten.plantennaam, planten.prijs
FROM Offertes, planten
where offertes.art_code = planten.art_code
and planten.kleur ='rood';

-- alias = verkorte naam
SELECT O.*, P.plantennaam, P.prijs
FROM Offertes O, planten P
where O.art_code = P.art_code
and P.kleur ='rood';


SELECT O.*, P.plantennaam, P.prijs, L.Lev_naam
FROM Offertes O, planten P, leveranciers L
where O.art_code = P.art_code
and O.lev_code = L.Lev_code
and P.kleur ='rood';

select B.*, L.lev_naam, L.adres, L.woonplaats, L.korting, R.*
From bestellingen B JOIN leveranciers L
On B.lev_code = L.lev_code
Join bestelregels R
on R.bestelnr = B.bestelnr
where L.woonplaats = 'Lisse'
Order by L.lev_naam;

select L.lev_code,L.lev_naam, B.bestelnr, B.besteldatum
From leveranciers L Join bestellingen B
On L.lev_code = B.lev_code;

-- left join
select L.lev_code,L.lev_naam, B.bestelnr, B.besteldatum
From leveranciers L left Join bestellingen B
On L.lev_code = B.lev_code;

select P.bloeibegin
from planten P
where P.plantennaam= 'daglelie';

-- auto-join (self-join)
-- planten die dezelfde maand beginnen te bloeien als de daglelie
select X.*
from planten P, planten X
where P.plantennaam= 'daglelie'
and X.bloeibegin=P.bloeibegin
and X.art_code != P.art_code;

-- oef van OpgavenSQL.pdf p7
select P.art_code, P.plantennaam, L.lev_naam, O.lev_tijd, O.Off_prijs
From planten P join offertes O
on P.art_code = O.art_code
join leveranciers L
on O.lev_code = L.lev_code
order by P.plantennaam;

-- oef2
select PS.categorie, P.plantennaam, P.prijs
From plantschema PS, planten P
where P.hoogte between PS.hoogte1 and Ps.hoogte2
and (PS.categorie ='midden' or PS.categorie ='laag');


-- 3. In welke plaatsen wonen leveranciers die vaste planten aanbieden? (via offerte tabel)
select distinct L.woonplaats
from leveranciers L join offertes O
on L.lev_code = O.lev_code
Join planten P
on P.art_code = O.art_code
where P.soort ='vast';


-- 4. Geef een overzicht van alle rode planten die kunnen geleverd worden door
-- leveranciers die niet in Aalsmeer gevestigd zijn. Toon hierbij de artikelcode,
-- naam van de plant, soort, naam van de leverancier, gemeente. Sorteer op
-- soort en plantennaam

Select P.art_code, P.plantennaam, P.soort, L.lev_naam, L.woonplaats
from planten P join offertes O
on P.art_code = O.art_code
Join leveranciers L
on L.lev_code = O.lev_code
where P.kleur ='rood'
and L.woonplaats !='Aalsmeer'
order by P.plantennaam;

-- 5. Bepaal per plant de laagste offerteprijs. Toon hierbij de artikelcode, naam
-- van de plant en offerteprijs. Sorteer op plantennaam.

select P.art_code, P.plantennaam, min(O.off_prijs)
from planten P, offertes O
where P.art_code = O.art_code
-- and min(O.off_prijs)
order by P.plantennaam;

-- 6. Maak een lijst met plantennaam, hoogte en plantafstand voor de planten: berk, beuk en linde
select distinct  P.plantennaam, P.hoogte, PS.afstand
from  planten P join plantschema PS
on P.hoogte between PS.hoogte1 and PS.hoogte2
where  P.plantennaam in ('berk','beuk','linde');

-- 7. Toon een lijst met per bestelnummer het bestelnummer, de naam van de
-- leverancier, het totaal aantal planten van de bestelling, het totaalbedrag per
-- bestelling en de leveringsdatum. De lijst moet gesorteerd zijn op
-- leveringsdatum (vroegste eerst), en bij gelijkheid op bestelnummer.

select B.bestelnr, L.lev_naam, sum(BR.aantal), B.bedrag, B.lev_datum
from leveranciers L join bestellingen B
on L.lev_code = B.lev_code
join bestelregels BR
on BR.bestelnr= B.bestelnr
group by B.bestelnr, L.lev_naam, B.bedrag,B.lev_datum
order by B.lev_datum ASC, B.bestelnr;

-- 8. Toon een lijst met bestelde planten waarvoor er nu bij dezelfde leverancier
-- offertes bestaan die lager zijn dan de destijds gehanteerde bestelprijzen.
-- Vermeld enkel de plantennaam en bestelprijs.
select P.plantennaam, BR.bestelprijs
from Planten P join bestelregels BR
on BR.art_code= P.art_code
join bestellingen B
on BR.bestelnr = B.bestelnr
join Offertes O
on P.art_code = O.art_code
join Leveranciers L1
on O.lev_code=L1.lev_code
join Leveranciers L2
on L2.lev_code=B.lev_code
where O.off_prijs < BR.bestelprijs
and L1.lev_code=L2.lev_code; 

-- 9. Zoek de bestellingen die een besteldatum hebben die gelijk is aan de leverdatum van één of meer andere bestellingen.

select B.bestelnr, B.besteldatum
from bestellingen B, bestellingen X
Where B.besteldatum= X.lev_datum;


-- 10. Toon een overzicht waaruit blijkt welke bestellingen werden geplaatst met
-- een leveringsdatum groter dan ’03-23-1999’. Toon bestelnummer, naam van
-- de leverancier, en een kolom met de vermelding ‘te laat’ ofwel geen
-- vermelding naargelang toepasselijk is. Sorteer op bestelnummer



select B.bestelnr, L.lev_naam, '' as vermelding 
from bestellingen B
join leveranciers L on B.lev_code = L.lev_code 
where B.lev_datum <= '03-23-1999' 
union 
select B.bestelnr, L.lev_naam, 'te laat' as vermelding 
from bestellingen B
join leveranciers L on B.lev_code = L.lev_code 
where B.lev_datum > '03-23-1999' 
order by B.bestelnr;


-- gem prijs van gemengde planten (kleur= gemengd)
select avg(prijs)
from planten
where kleur='gemengd';

-- per plantensoort de gemiddelde hoogte van planten met die soort, van groot naar klein gesorteerd op gemiddelde hoogte
select P.soort, avg(P.hoogte)
From planten P
group by P.soort
order by 2 Desc;


-- plantensoorten met gemiddelde hoogte > 50
select P.soort
From planten P
group by P.soort
having avg(P.hoogte) >50;



-- soort van het plantennaam afrikaantje
select P.soort
from planten P
where P.plantennaam ='afrikaantje';



-- welke planten behoren tot dezelfde soort als het afrikaantje
select X.plantennaam
from planten P, planten X
where P.plantennaam= 'afrikaantje'
and X.soort=P.soort
and X.art_code != P.art_code;
-- alternatief met Subquery
Select *
from planten
where soort=
(Select soort
from planten
Where plantennaam ='afrikaantje');



-- namen en prijzen van planten die meer kosten dan de gemiddelde prijs van de rode planten
select P.plantennaam, P.prijs
From planten P
where prijs>(
select  avg(P.prijs)
From planten p
where p.kleur='rood');

-- 
select *
from bestellingen
where lev_code in
(select lev_code
from leveranciers
where Woonplaats ='Lisse');


-- hoeveel planten behoren tot delefde oort als de sierui
select count(*)
from planten
where soort =
(select soort
from planten
where pantennaam= 'Sierui';

-- woonplatsen die de kleinste korting geven
select woonplaats
from leveranciers
where korting =
(select min(korting)
from Leveranciers);


select L.lev_naam
from leveranciers L, Offertes O
where L.lev_code = O.lev_code and L.lev_code in
(select plantennaam
from planten P, Offertes O
where plantennaam ='kikkerbeet'
and P. art_code =O.art_code);
-- alternatief
select l.lev_naam
from leveranciers L join offertes O
on L.lev_code = O.lev_code join planten P
on P.art_code = O.art_code
where P.plantennaam= 'kikkerbeet';

-- namen en adressen van leveranciers waarbij nooit een bestelling geplaatst is (dwz niet voorkomen in tabel bestellingen)
select lev_naam, adres
from leveranciers
where lev_code not in 
(select lev_code
from bestellingen);
-- alternatief
select L.lev_naam. L.adress 
from leveranciers L left Join bestellingen  B
on L.Lev_code = B.lev_code
where b.bestelNr is nutt;


-- afstand tussen 2 stokrozen
select afstand
from plantschema 
where (select hoogte
from planten
where plantennaam = 'stokroos')
between hoogte1 and hoogte2;


/*select soort, hoogte, plantennaam
from plante P
Where hoote(select max(hoote) from planten)
from planten
where soort= P.soort)
order by 1;*/

-- oef van van OpgavenSQL.pdf vanaf 12
-- 1. Toon een lijst met naam en prijs van de duurste boom (of bomen). 
select plantennaam, prijs
from planten 
where prijs=(select max(prijs)
from planten);


-- 2. Toon een lijst met de planten die even goedkoop of goedkoper zijn dan de goedkoopste vaste plant. Vermeld naam, prijs en soort. 
select plantennaam, prijs, soort
from planten
where prijs <= (select min(prijs)
from planten
where soort= 'vast');

-- 3. Welke planten zijn hoger dan de hoogste vaste plant en tevens goedkoper dan de gemiddelde prijs van alle planten?
select plantennaam
from planten
where prijs<(select avg(prijs)
from planten) and hoogte > (select max(hoogte)
from planten
where soort= 'vast');

-- 4. Toon een lijst met de planten die besteld werden bij leverancier “FLORA bv.”. Sorteer op artikelcode. Vermeld artikelcode, bestelnummer, aantal stuks, bestelprijs, en het totaal bedrag
select BR.art_code, BR.bestelnr, BR.aantal, BR.bestelprijs, B.bedrag
from bestelregels BR, bestellingen B
where BR.bestelnr= B.bestelnr and B.lev_code =(select L.lev_code
from Leveranciers L
where L.lev_naam ='Flora bv.')
order by BR.art_code;


-- 5. Toon een lijst met de bestelnummers van de bestellingen waarbij een korting van minstens 5% werd toegekend.
select B.bestelnr
from bestellingen B
where B.lev_code in (select L.lev_code
from leveranciers L
Where L.korting >5);


-- 6. Toon een lijst met alle gegevens over de leveranciers waarbij bestellingen werden geplaatst met een leveringsdatum vóór 1 april 1999('04-01-1999'). Los op met en zonder subvraag
select L.*
from leveranciers L
where L.lev_code in (select B.lev_code
from bestellingen B
where B.lev_datum < '1999-04-01');

select distinct L.*
from leveranciers L join bestellingen B
on l.lev_code = b.lev_code
where B.lev_datum < '1999-04-01';

select *
from planten
where kleur ='rood';

select *
from planten
where kleur ='rood'
or plantennaam like'%zon%';

select *
from planten
where (kleur ='rood' and soort='vast')
or plantennaam like'%zon%';

select max(prijs)
from planten
where (kleur ='rood' and soort='vast')
or plantennaam like'%zon%';

-- van alle planten: gemiddelde prijs per kleur
select kleur, avg(prijs)
from planten
group by kleur;

select kleur, avg(prijs)
from planten
-- where kleur is not null
group by kleur
having kleur is not null; -- of op deze manier


select kleur, avg(prijs)
from planten
where kleur is not null
group by kleur
order by 2 Desc;

select P.art_code, P.plantennaam, P.prijs, O.off_prijs, P.prijs-O.off_prijs as 'winst'
from planten P join offertes O
where P.kleur ='geel' and P.soort='water';


select * from leveranciers;

insert into leveranciers
values('999', 'Cevora', 'plaskyplein 123', 'Brussel',0.01);


insert into leveranciers(lev_naam, woonplaats, lev_code, adres)
values('VDAB', 'Brussel', '998', 'sommerstraat 22');


create table BOMEN(
art_code varchar (3) not null,
naam varchar (16) not null,
kleur varchar (7),
hoogte decimal (18,2),
prijs decimal (18,2) not null);

insert into bomen
select art_code, plantennaam, kleur, hoogte, prijs
from planten
where soort ='boom';


select * from bomen;

insert into bomen
select art_code, plantennaam, kleur, hoogte, prijs
from planten
where soort ='bestaat niet';

-- de prijs van alle bomen aanpassen met 10%
update bomen
set prijs=prijs*1.1;

update bomen
set prijs=prijs*0.5, hoogte = hoogte*1.2
where kleur='wit';


delete from leveranciers
where lev_naam in ('VDAB', 'Cevora');


create index idx_plantennaam on planten (plantennaam);

create unique index idx_artcode_bomen on bomen (art_code);

-- view gele_waterplanten verwijderen
drop view gele_waterplanten;

create view gele_waterplanten as 
select P.art_code, P.plantennaam, P.prijs, O.off_prijs, P.prijs-O.off_prijs as 'winst'
from planten P join offertes O
on P.art_code = O.art_code
where P.kleur ='geel' and P.soort='water';


-- de naam van een view mag in een select gebruikt worden alsof het een echte tabel is
select plantennaam, winst
from gele_waterplanten
order by 2;

update planten
set kleur='wit'
where plantennaam = 'blaasjeskruid';

update planten
set kleur='geel'
where plantennaam = 'blaasjeskruid';



/* opd1. Maak een tabel Boomleveranciers met dezelfde structuur als de tabel
Leveranciers. Vul deze tabel met de gegevens van de leveranciers die
bomen kunnen leveren.*/
create table Boomleveranciers(
lev_code varchar(3) not null,
Lev_naam varchar (20) not null,
adres varchar (25),
woonplaats varchar (15),
korting decimal (18,2) not null
);

insert into Boomleveranciers
select distinct l.lev_code, l.Lev_naam, l.adres, l.woonplaats, l.korting
from leveranciers l join offertes O
on l.lev_code = O.lev_code
join planten P
on O.art_code = P.art_code
where P.soort ='boom';
-- opdr1_end

/*Opdr_2 Maak een tabel vaste_planten waarin voor alle vaste planten de
plantennaam, de artikelcode, de naam (of namen) en de woonplaats (of
woonplaatsen) van de leverancier(s) waarvan een offerte bestaat voor de
vaste plant bewaard worden.*/
create table vaste_planten(
art_code varchar (3) not null,
plantennaam varchar (16),
lev_naam varchar (20),
woonplaats varchar (15));

insert into vaste_planten
select P.art_code, P.plantennaam, L.lev_naam, L.woonplaats
from planten P join offertes O
on P.art_code = O.art_code
join leveranciers L
on O.Lev_code= L.lev_code
where O.art_code in (
select P.art_code
from planten P
where P.soort= 'vast');
-- Opdr_2_end


/*Opdr_3
Verwijder voor leverancier met leverancierscode 009 alle offertes voor vaste
planten.*/
delete from offertes
where art_code in (
select P.art_code
from planten P
where P.soort= 'vast') and lev_code= 009;
-- Opdr_3_end


/*Opdr_4
Maak een tabel goedkoop met per plant de goedkoopste leverancier(s).
Neem in deze tabel de artikelcode en de plantennaam op, de naam van de
leverancier en de offerteprijs.*/
create table goedkoop(
art_code varchar(3)not null,
plantennaam varchar (16),
lev_naam varchar (20),
off_prijs decimal(18,2)
);

insert into goedkoop
select P.art_code, P.plantennaam, L.lev_naam, O.off_prijs
from leveranciers L join offertes O
on L.lev_code = O.lev_code
join planten P
on P.art_code = O.art_code
group by O.art_code;
-- Opdr_4_end

/* Opdr_5
Op 23 april 1997 werd een nieuwe bestelling geplaatst bij leverancier 007.
In de tabel bestelregels moeten volgende rijen opgenomen worden:
Bestelnr Artikelcode Aantal Bestelprijs
0205 242 10 160
0205 437 200 20
0205 082 25 55
De leverancier geeft 8% korting. Leveringstermijn is 1 week. Voeg de nodige
gegevens betreffende deze bestelling toe aan de nodige tabellen.*/
select*
from bestelregels;

insert into leveranciers(lev_code,lev_naam,adres,woonplaats,korting)
values('007','Vasilyi','Churkorgon 2','Bishkek','8.00');

insert into bestellingen(bestelnr,lev_code,besteldatum,lev_datum,bedrag)
values('0205','007','1997-04-23','1997-04-30','160');

insert into bestelregels(bestelnr, art_code, aantal, bestelprijs)
values('0205', '242', '10', '160'),
('0205', '437', '200', '20'),
('0205', '082', '25', '55');

/* 6 */
DELETE FROM offertes
WHERE art_code IN(
	SELECT art_code
	FROM planten
	WHERE soort = 'WATER'
	);
	
DELETE FROM bestelregels 
WHERE art_code IN(
SELECT art_code
	FROM planten
	WHERE soort = 'WATER'
	);
	
DELETE FROM bestellingen
WHERE bestelnr NOT IN(SELECT bestelnr FROM bestelregels);

DELETE FROM planten
WHERE soort = 'WATER';

/* Opdr_7
De leveringsdatum bij de leverancier met code 009 is onzeker. Verwijder de
betreffende leveringsdatums. (Vervang de leveringsdatum voor deze
leverancier door NULL.)
*/
select *
from leveranciers
where lev_code='009';

UPDATE bestellingen
SET lev_datum = null
WHERE lev_code = '009';



/* Opdr_1
Definieer een view off_lisse waarin alleen offertes van leveranciers uit
Lisse voorkomen.
*/
CREATE VIEW off_lisse 
AS SELECT *
FROM offertes
WHERE lev_code IN(
	SELECT lev_code
	FROM leveranciers
	WHERE woonplaats = 'LISSE'
	);
    
/* Opdr_2
Definieer een view vgl_off_prijs. Deze bevat de kolommen art_code,
min_off, max_off en gem_off, met respectievelijk de artikelcode, laagste,
hoogste en gemiddelde offerteprijs.
*/
CREATE VIEW vgl_off_prijs (art_code, min_off, max_off, gem_off)
AS SELECT art_code, MIN(off_prijs), MAX(off_prijs), AVG(off_prijs)
FROM offertes
GROUP BY art_code;

/* Opdr_3
 Definieer een view vast_laag waarin alle gegevens van alle vaste planten
uit de categorie “laag” voorkomen.
 */
CREATE VIEW vast_laag
AS SELECT planten.*
FROM planten, plantschema
WHERE hoogte BETWEEN hoogte1 AND hoogte2
AND soort = 'VAST'
AND categorie = 'LAAG';

/*Opdr_4
Definieer een view off_lev014 waarin de offertes van de leverancier met
code ‘014’ worden opgenomen: artikelcode, plantnaam, offerteprijs en
onze verkoopprijs. */

create view off_lev014
as select P.art_code, P.plantennaam, O.off_prijs, P.prijs
From planten P, offertes O
where P.art_code = O.art_code
and O.lev_code = '014';


/*Opdr_5
Definieer een view besteld via welke een overzicht kan worden bekomen
van de bestelde planten. De kolommen bevatten plantnaam,
bestelnummer, leverancierscode en artikelcode.
*/

CREATE VIEW besteld 
AS SELECT plantennaam, bestellingen.bestelnr, bestellingen.lev_code, bestelregels.art_code
FROM planten, bestelregels, bestellingen, offertes
WHERE planten.art_code = offertes.art_code
AND offertes.art_code = bestelregels.art_code
AND offertes.lev_code = bestellingen.lev_code
AND bestellingen.bestelnr = bestelregels.bestelnr;

/* 6 */
CREATE VIEW min_prijs (art_code, plantennaam, lev_code, off_prijs, winst)
AS SELECT planten.art_code, plantennaam, lev_code, off_prijs, prijs - off_prijs
FROM planten, offertes O
WHERE planten.art_code = O.art_code
AND off_prijs = (
	SELECT MIN(off_prijs)
	FROM offertes O2
	WHERE O2.art_code = O.art_code
	);

