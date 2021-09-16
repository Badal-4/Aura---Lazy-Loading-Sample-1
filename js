<aura:component controller="DataTableController" implements="flexipage:availableForAllPageTypes">
    <!-- attributes -->
    <aura:attribute name="objectName" type="String" default="Account"/>
    <aura:attribute name="fieldsString" type="String" default="Name,Phone,Email,Website"/>
    <aura:attribute name="fieldsList" type="List" default="[]"/>
    
    <aura:attribute name="columns" type="List" default="[]"/>
    <aura:attribute name="data" type="List" default="[]"/>
    <aura:attribute name="keyField" type="String" default="id"/>
    <aura:attribute name="initialRows" type="Integer" default="5"/>
    <aura:attribute name="selectedRowsCount" type="Integer" default="0"/>
    <aura:attribute name="enableInfiniteLoading" type="Boolean" default="true"/>
    <aura:attribute name="rowsToLoad" type="Integer" default="50"/>
    <aura:attribute name="totalNumberOfRows" type="Integer" default="1000"/>
    <aura:attribute name="loadMoreStatus" type="String" default=""/>
    <aura:attribute name="sortedBy" type="String" default="Id"/>
    <aura:attribute name="sortedDirection" type="String" default="ASC"/>

    <!-- handlers-->
    <aura:handler name="init" value="{! this }" action="{! c.init }"/>

    <div class="slds-is-relative">
        <!-- toolbox -->
        <!-- the container element determine the height of the datatable -->
        <div style="height: 300px">
            <lightning:datatable
                columns="{! v.columns }"
                data="{! v.data }"
                keyField="{! v.keyField }"
                showRowNumberColumn="true"
                sortable = "true"
                editable = "true"
                onsort = "{! c.updateColumnSorting }"
                sortedBy="{!v.sortedBy}"  
                 sortedDirection="{!v.sortedDirection}"
                onrowselection="{! c.updateSelectedText }"
                enableInfiniteLoading="{! v.enableInfiniteLoading }"
                loadMoreOffset="{! v.loadMoreOffset }"
                onloadmore="{! c.loadMoreData }"
                />
        </div>
        {! v.loadMoreStatus }
    </div>
</aura:component>
