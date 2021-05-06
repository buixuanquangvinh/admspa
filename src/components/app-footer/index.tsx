import { GroupuiHeader, GroupuiGridRow, GroupuiGridCol, GroupuiIcon } from '@sdc-wob-type-3/group-ui-react'

export function AppFooterComponent(props:any){
    return (
        <GroupuiHeader style={{background:'white'}}>
            <GroupuiGridRow>
                <GroupuiGridCol xs={3}>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <GroupuiIcon name="car-24"/>
                    </div>
                </GroupuiGridCol>
                <GroupuiGridCol xs={3}>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <GroupuiIcon name="map-24"/>
                    </div>
                </GroupuiGridCol>
                <GroupuiGridCol xs={3}>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <GroupuiIcon name="repair-24"/>
                    </div>
                </GroupuiGridCol>
                <GroupuiGridCol xs={3}>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <GroupuiIcon name="help-24"/>
                    </div>
                </GroupuiGridCol>
            </GroupuiGridRow>
        </GroupuiHeader>
    )
}