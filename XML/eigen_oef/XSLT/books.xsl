<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html"/>
<xsl:template match="/bookstore">
<table>
<tr><th>title</th><th>auteur</th><th>isbn</th><th>prijs</th></tr>

<xsl:for-each select="book">
<xsl:sort select="price" data-type="number" order="ascending"/>
<tr>
<td><xsl:apply-templates select="title" /></td>
<td><xsl:apply-templates select="author" /></td>
<td><xsl:value-of select="@ISBN"></xsl:value-of></td>

<td><xsl:apply-templates select="price" /></td>
</tr>
</xsl:for-each>

</table>
</xsl:template>

<xsl:template match="title">
<xsl:value-of select="."></xsl:value-of>
</xsl:template>

<xsl:template match="ISBN">
<xsl:value-of select="."></xsl:value-of>
</xsl:template>

<xsl:template match="price">
<xsl:value-of select="."></xsl:value-of>
</xsl:template>

</xsl:stylesheet>


