import { GroupuiHeader, GroupuiGridRow, GroupuiGridCol , GroupuiIcon, GroupuiText } from '@sdc-wob-type-3/group-ui-react'

export function AppHeaderComponent(props:any){

    let headerStyle= {
        background:'white',
        boxShadow:'none',
        borderBottom:'3px solid #F5F5F5',
        height:'100px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        paddingBottom:'0.5rem'
    }

    return (
        <GroupuiHeader style={headerStyle}>
            <GroupuiGridRow>
                <GroupuiGridCol xs={12} style={{textAlign:'center'}}>
                    <GroupuiIcon name="arrow-left-24" style={{position:'absolute',left:'1rem'}}/>
                    <GroupuiText size="normal" weight="bold" style={{color:'var(--groupui-vwag-color-petrol-800-primary)'}} >Header Title</GroupuiText>
                </GroupuiGridCol>
            </GroupuiGridRow>
        </GroupuiHeader>
    )
}