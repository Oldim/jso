<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html"/>
<xsl:template match="/items">
<h2>Categorie <xsl:value-of select="@categorie"></xsl:value-of>:</h2>
<table>
<tr><th>categorie</th><th>omschrijving</th><th>prijs</th></tr>

<xsl:for-each select="item">
<xsl:sort select="omschrijving" order="ascending"/>
<xsl:if test="categorie='CD'">
<tr>
<td><xsl:apply-templates select="categorie" /></td>
<td><xsl:apply-templates select="omschrijving" /></td>
<td><xsl:apply-templates select="prijs" /></td>
</tr>
</xsl:if>
</xsl:for-each>

</table>
</xsl:template>

<xsl:template match="categorie">
<xsl:value-of select="."></xsl:value-of>
</xsl:template>

<xsl:template match="omschrijving">
<xsl:value-of select="."></xsl:value-of>
</xsl:template>

<xsl:template match="prijs">
<xsl:value-of select="."></xsl:value-of>
</xsl:template>

</xsl:stylesheet>


