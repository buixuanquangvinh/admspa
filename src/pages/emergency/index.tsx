import React from 'react';
// UI
import {
  GroupuiText,
  GroupuiHeader,
  GroupuiGridRow,
  GroupuiGridCol,
  GroupuiIcon
} from '@sdc-wob-type-3/group-ui-react';

interface InitListService {
  text: string
}

const ListServices:React.FC<InitListService> = ({ text }) => {
  return (
    <div
      style={{
        display:'flex',
        alignItems: 'flex-start',
        padding: '11px 20px 11px 27px',
        borderBottom: '2px solid #F5F5F5'
      }}
    >
      {/* <GroupuiIcon name="arrow-left-24" style={{position:'absolute',left:'15px'}}/> */}
      <img
        width="20.95"
        height="19.95"
        src="https://www.seekpng.com/png/full/208-2083342_phone-fax-phone-icon-white-png.png" alt="icon-phone"
      />
      <GroupuiText size="normal" weight="bold"
        style={{
          color:'#20607E', 
          paddingRight: '15px',
          marginLeft: '16px'
        }}>
        {text}
      </GroupuiText>
    </div>
  )
}

export function EmergencyService(props:any) {

  return (
    <div>
      <GroupuiHeader
        style={{
          background:'white',
          boxShadow: 'none',
          borderBottom: '3px solid #F5F5F5',
          paddingTop: 0,
          marginTop: '64px',
          height: 'unset',
          paddingBottom: '13px',
          color: '#20607E'
        }}>
          <GroupuiGridRow>
              <GroupuiGridCol xs={12} style={{textAlign:'center'}}>
                  <GroupuiIcon name="arrow-left-24" style={{position:'absolute',left:'15px'}}/>
                  <GroupuiText size="normal" weight="bold" style={{color:'#20607E'}} >
                    Audi Notdienst anrufen
                  </GroupuiText>
              </GroupuiGridCol>
          </GroupuiGridRow>
      </GroupuiHeader>
      <div
        style={{
          borderBottom: "2px solid #F5F5F5",
          padding: '35px 20px 0 20px'
        }}
      >
        <GroupuiText size="normal" weight="bold" style={{color:'#20607E', fontSize: '24px'}} >
          Wo sind Sie?
        </GroupuiText>
        <GroupuiText size="normal" style={{color:'#20607E', margin: '17px 0'}} >
          Damit Sie richtig verbunden werden können, geben Sie bitte an, ob Sie sich gerade in Deutschland oder im Ausland befinden.
        </GroupuiText>
      </div>
      
      <ListServices text="Audi Notdienst anrufen" />

      <ListServices text="Im europäischen Ausland" />

      <ListServices text="Außerhalb Europas*" />

      <GroupuiText
        size="normal"
        style={{
          color:'#20607E',
          fontSize: '14px',
          padding: '29px 20px 0px 20px',
          letterSpacing: '0.17px',
          textAlign:'left'
        }}
      >
        * Die Kosten richten sich nach dem jeweiligen Tarif bei Ihrem Anbieter. Bei Anrufen aus dem Ausland können Roaming-Gebühren anfallen.
      </GroupuiText>
    </div>
  );
};