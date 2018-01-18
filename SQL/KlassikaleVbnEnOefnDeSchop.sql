USE deschop;

SELECT *
FROM planten;

SELECT *
FROM offertes;

SELECT *
FROM leveranciers;

SELECT *
FROM bestellingen;

SELECT *
FROM bestelregels;

SELECT *
FROM plantschema;

SELECT plantennaam, kleur, prijs
FROM planten
WHERE kleur='rood' AND prijs BETWEEN 5 AND 10;

SELECT art_code, plantennaam, kleur, prijs
FROM planten
WHERE kleur IN ('rood','blauw','wit','geel')
ORDER BY plantennaam;

SELECT art_code, plantennaam
FROM planten
WHERE plantennaam LIKE '%roos%';

SELECT DISTINCT plantennaam, hoogte, kleur
FROM planten
WHERE kleur IS NOT NULL
ORDER BY kleur, plantennaam;

SELECT DISTINCT kleur
FROM planten;

-- aantal planten waarvoor kleur niet null is
SELECT COUNT(kleur)
FROM planten;

-- aantal planten
SELECT COUNT(*)
FROM planten;

-- aantal waterplanten 
SELECT COUNT(*)
FROM planten
WHERE soort = 'water';

-- aantal kleuren
SELECT 
    COUNT(DISTINCT kleur)
FROM
    planten;

SELECT MIN(plantennaam) AS 'eerste naam', 
	MAX(plantennaam) AS 'laatste naam', 
    SUM(prijs) AS 'totaal prijs', 
    AVG(hoogte) AS 'gemiddelde hoogte'
FROM planten;

-- MariaDb (en MySQL) volgen de regels ivm aggregate fies in de select
-- standaard NIET.  We dwingen dit af met volgend commando:
SET sql_mode='only_full_group_by';

-- volgend statement veroorzaakt een fout; want
-- als in de select een standaardfie gebruikt wordt, mogen enkel
-- standaardfies en velden waarop gegroepeerd is
-- opgevraagd worden in de select
SELECT MIN(prijs), plantennaam
FROM planten;

-- volgend statement veroorzaakt een fout; want
-- standaardfies mogen NIET gebruikt worden in de WHERE
SELECT plantennaam
FROM planten 
WHERE hoogte = MIN(hoogte);

-- aantal planten per kleur
SELECT kleur, COUNT(*)
FROM planten
GROUP BY kleur
ORDER BY COUNT(*) DESC;

-- van de rode en de witte planten:
-- goedkoopste en duurste prijs, alsook aantal planten per soort
SELECT soort, MIN(prijs), MAX(prijs), COUNT(*)
FROM planten
WHERE kleur IN('rood', 'wit')
GROUP BY soort;

-- van de rode en de witte planten:
-- goedkoopste en duurste prijs, alsook aantal planten per soort ..
-- waarvan er hoogstens 3 (rode of witte) planten zijn
SELECT soort, MIN(prijs), MAX(prijs), COUNT(*)
FROM planten
WHERE kleur IN('rood', 'wit') 
GROUP BY soort
HAVING COUNT(*) <= 3;

SELECT plantennaam, kleur, bloeibegin, 'Chloé' AS 'keuze van'
FROM planten
WHERE kleur = 'wit'
UNION
SELECT plantennaam, kleur, bloeibegin, 'Irina' AS 'keuze van'
FROM planten
WHERE bloeibegin = 4
UNION
SELECT plantennaam, kleur, bloeibegin, 'Ann' AS 'keuze van'
FROM planten
WHERE soort != 'boom' AND kleur IS NOT NULL
ORDER BY bloeibegin, kleur, plantennaam;

-- alle combinaties van rijen uit bestellingen
-- met rijen uit leveranciers
SELECT *
FROM bestellingen, leveranciers;

-- juiste combinaties van rijen uit bestellingen
-- met rijen uit leveranciers
-- JOIN: gegevens uit meerdere tabellen combineren
-- EQUI-JOIN = INNER JOIN
SELECT bestellingen.*, leveranciers.lev_naam, leveranciers.adres,
	leveranciers.woonplaats, leveranciers.korting
FROM bestellingen, leveranciers
WHERE bestellingen.lev_code = leveranciers.lev_code
ORDER BY leveranciers.lev_naam;

SELECT offertes.*, planten.plantennaam, planten.prijs
FROM offertes, planten
WHERE offertes.art_code = planten.art_code
AND planten.kleur = 'rood';

-- als een veldnaam uniek is in een opvraging,
-- hoef je de tabelnaam niet voor de veldnaam te schrijven
-- (tabelnaam voor veldnaam schrijven is wel performanter)
SELECT offertes.*, plantennaam, prijs
FROM offertes, planten
WHERE offertes.art_code = planten.art_code
AND planten.kleur = 'rood';

-- alias = verkorte naam
SELECT O.*, P.plantennaam, P.prijs
FROM offertes O, planten P
WHERE O.art_code = P.art_code
AND P.kleur = 'rood';

SELECT O.*, P.plantennaam, P.prijs, L.lev_naam
FROM offertes O, planten P, leveranciers L
WHERE O.art_code = P.art_code
AND O.lev_code = L.lev_code
AND P.kleur = 'rood';

SELECT B.*, L.lev_naam, L.adres, L.woonplaats, L.korting
FROM bestellingen B, leveranciers L
WHERE B.lev_code = L.lev_code
ORDER BY L.lev_naam;

SELECT B.*, L.lev_naam, L.adres, L.woonplaats, L.korting
FROM bestellingen B JOIN leveranciers L
ON B.lev_code = L.lev_code
WHERE L.woonplaats = 'Lisse'
ORDER BY L.lev_naam;

SELECT B.*, L.lev_naam, L.adres, L.woonplaats, L.korting, R.*
FROM bestellingen B JOIN leveranciers L
ON B.lev_code = L.lev_code
JOIN bestelregels R
ON R.bestelnr = B.bestelnr
WHERE L.woonplaats = 'Lisse'
ORDER BY L.lev_naam;

SELECT L.lev_code, L.lev_naam, B.bestelnr, B.besteldatum
FROM leveranciers L JOIN bestellingen B
ON L.lev_code = B.lev_code;

SELECT L.lev_code, L.lev_naam, B.bestelnr, B.besteldatum
FROM leveranciers L LEFT JOIN bestellingen B
ON L.lev_code = B.lev_code;

-- planten die in dezelfde maand beginnen te bloeien als de daglelie
-- SELF JOIN = AUTO JOIN
SELECT X.*
FROM planten L, planten X
WHERE L.plantennaam = 'daglelie'
AND X.bloeibegin = L.bloeibegin
AND X.art_code != L.art_code;

-- opgaven joins, vraag 7 
select bestellingen.bestelnr, leveranciers.lev_naam,
	sum(bestelregels.aantal) as aantal_planten, 
    bestellingen.bedrag, bestellingen.lev_datum 
from bestellingen, leveranciers, bestelregels
where bestellingen.lev_code = leveranciers.lev_code and
bestellingen.bestelnr = bestelregels.bestelnr
group by bestellingen.bestelnr, leveranciers.lev_naam, 
	bestellingen.bedrag, bestellingen.lev_datum 
order by bestellingen.lev_datum, bestellingen.bestelnr;

-- alternatief
select bestellingen.bestelnr, MIN(leveranciers.lev_naam),
	sum(bestelregels.aantal) as aantal_planten, 
    MAX(bestellingen.bedrag), MIN(bestellingen.lev_datum) 
from bestellingen, leveranciers, bestelregels
where bestellingen.lev_code = leveranciers.lev_code and
bestellingen.bestelnr = bestelregels.bestelnr
group by bestellingen.bestelnr
order by bestellingen.lev_datum, bestellingen.bestelnr;