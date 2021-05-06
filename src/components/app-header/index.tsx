import { GroupuiHeader, GroupuiGridRow, GroupuiGridCol , GroupuiIcon, GroupuiText } from '@sdc-wob-type-3/group-ui-react'

export function AppHeaderComponent(props:any){

    return (
        <GroupuiHeader style={{background:'white'}}>
            <GroupuiGridRow>
                <GroupuiGridCol xs={12} style={{textAlign:'center'}}>
                    <GroupuiIcon name="arrow-left-24" style={{position:'absolute',left:'20px'}}/>
                    <GroupuiText size="normal" weight="bold" style={{color:'var(--groupui-vwag-color-petrol-800-primary)'}} >Header Title</GroupuiText>
                </GroupuiGridCol>
            </GroupuiGridRow>
        </GroupuiHeader>
    )
}