import { GroupuiText , GroupuiButton, GroupuiDivider, GroupuiIcon } from '@sdc-wob-type-3/group-ui-react';

export function OverView(props:any) {
    let customButtonStyle={
        width:'100%',
        display:'flex',
        justifyContent:'begin',
        color:'var(--groupui-vwag-color-petrol-800-primary)',
        padding:'10px 0px'
    }
    return (
        <div>
            <GroupuiText size="normal" weight="regular" style={{marginLeft:'20px'}}>Schadensart melden</GroupuiText>
            <GroupuiDivider/>
            <div style={{padding:'0px 20px'}}>
                <div style={customButtonStyle}>
                    <GroupuiIcon name="plus-24" style={{marginRight:'1rem'}}/><b>Glasschaden</b>
                </div>
                <GroupuiDivider/>
                <div style={customButtonStyle}>
                    <GroupuiIcon name="plus-24" style={{marginRight:'1rem'}}/><b>Fahrzeugschaden</b>
                </div>
                <GroupuiButton type="button" variant="primary" fullwidth={true} style={{marginTop:'25px'}}>
                    Audi Notdienst anrufen
                </GroupuiButton>
            </div>

            <GroupuiText size="normal" weight="regular" style={{marginLeft:'20px',marginTop:'40px'}}>Entwürfe</GroupuiText>
            <GroupuiDivider/>
            <div style={{padding:'0px 20px'}}>
                <div style={{...customButtonStyle,justifyContent:'space-between'}}>
                    <div>
                        <b>Glasschaden</b><br/>
                        <small style={{fontWeight:'lighter'}}>Keine Zeitangabe festgelegt</small>
                    </div>
                    <GroupuiIcon style={{alignSelf:'center'}} name="arrow-right-24"/>
                </div>
            </div>
            <GroupuiDivider/>

            <GroupuiText size="normal" weight="regular" style={{marginLeft:'20px',marginTop:'40px'}}>Gemeldete Schaden</GroupuiText>
            <GroupuiDivider/>
            <div style={{padding:'0px 20px'}}>
                <div style={{...customButtonStyle,justifyContent:'space-between'}}>
                    <div>
                        <b>Glasschaden</b><br/>
                        <small style={{fontWeight:'lighter'}}>Fr., 14.10.2020</small>
                    </div>
                    <GroupuiIcon style={{alignSelf:'center'}} name="arrow-right-24"/>
                </div>
                <GroupuiDivider/>
                <div style={{...customButtonStyle,justifyContent:'space-between'}}>
                    <div>
                        <b>Fahrzeugschaden</b><br/>
                        <small style={{fontWeight:'lighter'}}>Mi., 24.10.2020</small>
                    </div>
                    <GroupuiIcon style={{alignSelf:'center'}} name="arrow-right-24"/>
                </div>
            </div>

            <GroupuiDivider/>
            <div style={{padding:'10px 20px'}}>
                <GroupuiText size="normal" weight="regular" style={{color:'var(--groupui-vwag-color-petrol-800-primary)'}}>
                    Ihre gemeldeten Schäden werden für 6 Monate und ihre Entwürfe für 48 Stunden gespeichert und anschließend gelöscht. Die Datumsangaben beziehen sich auf den Zeitpunkt der Feststellung.
                </GroupuiText>
            </div>
        </div>
    );
}