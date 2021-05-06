import { GroupuiHeader, GroupuiGridRow, GroupuiGridCol  } from '@sdc-wob-type-3/group-ui-react'

export function AppHeaderComponent(props:any){

    return (
        <GroupuiHeader style={{width:'100%'}}>
            <GroupuiGridRow>
                <GroupuiGridCol s={2}>back icon</GroupuiGridCol>
                <GroupuiGridCol s={10}>Header Title</GroupuiGridCol>
            </GroupuiGridRow>
        </GroupuiHeader>
    )
}