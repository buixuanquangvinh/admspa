import { GroupuiText , GroupuiButton, GroupuiDivider, GroupuiIcon } from '@sdc-wob-type-3/group-ui-react';

export function OverView(props:any) {
    let customButtonStyle={
        width:'100%',
        display:'flex',
        justifyContent:'begin',
        padding:'0.75rem 0px'
    }

    let textColor = { color:'var(--groupui-vwag-color-petrol-800-primary)', alignSelf:'center' }
    return (
        <div>
            <GroupuiText size="caption" weight="bold" style={{marginLeft:'1.5rem'}}>Schadensart melden</GroupuiText>
            <GroupuiDivider/>
            <div style={{padding:'0px 20px'}}>
                <div style={customButtonStyle}>
                    <GroupuiIcon name="plus-32" style={{marginRight:'1rem'}}/>
                    <GroupuiText size="normal" weight="bold" style={textColor}>Glasschaden</GroupuiText>
                </div>
                <GroupuiDivider/>
                <div style={customButtonStyle}>
                    <GroupuiIcon name="plus-32" style={{marginRight:'1rem'}}/>
                    <GroupuiText size="normal" weight="bold" style={textColor}>Fahrzeugschaden</GroupuiText>
                </div>
                <GroupuiDivider/>
                <GroupuiButton type="button" variant="primary" fullwidth={true} style={{marginTop:'1rem'}}>
                    Audi Notdienst anrufen
                </GroupuiButton>
            </div>

            <GroupuiText size="caption" weight="bold" style={{marginLeft:'1.5rem',marginTop:'2.5rem'}}>Entwürfe</GroupuiText>
            <GroupuiDivider/>
            <div style={{padding:'0px 20px'}}>
                <div style={{...customButtonStyle,justifyContent:'space-between',padding:'0.5rem 0.25rem 0.75rem 0.25rem'}}>
                    <div>
                        <GroupuiText size="normal" weight="bold" style={textColor}>Glasschaden</GroupuiText>
                        <GroupuiText size="small" weight="bold" style={textColor}>Keine Zeitangabe festgelegt</GroupuiText>
                    </div>
                    <GroupuiIcon style={{alignSelf:'center'}} name="arrow-right-24"/>
                </div>
            </div>
            <GroupuiDivider/>

            <GroupuiText size="caption" weight="bold" style={{marginLeft:'1.5rem',marginTop:'2.5rem'}}>Gemeldete Schaden</GroupuiText>
            <GroupuiDivider/>
            <div style={{padding:'0px 20px'}}>
                <div style={{...customButtonStyle,justifyContent:'space-between',padding:'0.5rem 0.25rem 0.75rem 0.25rem'}}>
                    <div>
                        <GroupuiText size="normal" weight="bold" style={textColor}>Glasschaden</GroupuiText>
                        <GroupuiText size="small" weight="bold" style={textColor}>Fr., 14.10.2020</GroupuiText>
                    </div>
                    <GroupuiIcon style={{alignSelf:'center'}} name="arrow-right-24"/>
                </div>
                <GroupuiDivider/>
                <div style={{...customButtonStyle,justifyContent:'space-between',padding:'0.5rem 0.25rem 0.75rem 0.25rem'}}>
                    <div>
                        <GroupuiText size="normal" weight="bold" style={textColor}>Fahrzeugschaden</GroupuiText>
                        <GroupuiText size="small" weight="bold" style={textColor}>Mi., 24.10.2020</GroupuiText>
                    </div>
                    <GroupuiIcon style={{alignSelf:'center'}} name="arrow-right-24"/>
                </div>
            </div>

            <GroupuiDivider/>
            <div style={{padding:'10px 20px'}}>
                <GroupuiText size="normal" weight="bold" style={textColor}>
                    Ihre gemeldeten Schäden werden für 6 Monate und ihre Entwürfe für 48 Stunden gespeichert und anschließend gelöscht. Die Datumsangaben beziehen sich auf den Zeitpunkt der Feststellung.
                </GroupuiText>
            </div>
        </div>
    );
}