import React, {useState} from "react";
import { TabItem } from "./TabItens";


const tabsData = [
    {
        tabName: 'tab 1',
        tabText: 'Texto do primeiro tab'
    },
    {
        tabName: 'tab 2',
        tabText: 'Texto do segundo tab'
    },
    {
        tabName: 'tab 3',
        tabText: 'Texto do terceiro tab'
    },
    {
        tabName: 'tab 4',
        tabText: 'Texto do quarto tab'
    },
    
]

const tabNames = tabsData.map((tab) => tab.tabName)
const tabTexts = tabsData.map((tab) => tab.tabText)

export function Tab(){
    const [currentTab, setCurrentTab] = useState(0)

    function select(tabIndex: number) {
        setCurrentTab(tabIndex)
        console.log("Selecionou " + tabIndex)
    }


    const tabss = (
        <div>
            <TabItem
                tabs ={ tabNames } 
                text = { tabTexts }
                onSelect = {select}
                selection= {currentTab}
            />
        </div>
    )

    return(
        tabss
    )
}