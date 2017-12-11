<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="text"/>
<xsl:template match="/opleiding">
Overzicht deelnemers van opleiding <xsl:value-of select="@code"></xsl:value-of>:

<xsl:for-each select="deelnemers">
<xsl:apply-templates select="deelnemer" />

</xsl:for-each>

</xsl:template>

<xsl:template match="deelnemer">
<xsl:text>&#xA;</xsl:text>
<xsl:value-of select="."></xsl:value-of>
</xsl:template>
</xsl:stylesheet>


