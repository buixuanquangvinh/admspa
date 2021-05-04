import React, { useState } from 'react';
import { useInfiniteList } from 'hooks/infiniteList.hook';
// UI
import { 
  GroupuiButton, 
  GroupuiCard, 
  GroupuiText, 
  GroupuiModal,
  GroupuiDivider
} from '@sdc-wob-type-3/group-ui-react';
// scss
import './dashboard.scss'

interface InfiniteCheckList {
  text: any
}

// List
const CheckList:React.FC<InfiniteCheckList> = ({text}) => {
  return (
    <div style={{display:'flex', alignItems: 'flex-start'}}>
      <img style={{color: 'red'}} src="https://groupui-assets.apps.emea.vwapps.io/icons/vwag/check-24.svg" alt="icon-check"/>
      <GroupuiText style={{marginLeft: 10, marginBottom: 20, fontSize: 14}}>
        {text}
      </GroupuiText>
    </div>
  )
}

export function Dashboard() {
  const { infiniteListState, infiniteListAction  } = useInfiniteList('https://pokeapi.co/api/v2/pokemon')
  const [showModal, setShowModal] = useState(false)
  return (
    <div
      style={{
        padding: "0 15px"
      }}
    >
      <GroupuiText
        style={{
          fontSize: 18,
          margin: '30px 0 10px 0'
        }}
      >
        Unfallhilfe Pannenhilfe
      </GroupuiText>
      <GroupuiCard 
        background="var(--groupui-vwag-color-grey-100)"
        elevation={4}
        style={{textAlign: 'center'}}
      >
        <img width="100" height="100" src={"https://img.icons8.com/ios/452/shield.png"} alt="icon-shield"/>
      </GroupuiCard>
      <GroupuiCard 
        background="white"
        elevation={4}
      >
        <GroupuiText 
          style={{
            marginBottom: 0,
            display: 'block',
            fontSize: '14px'
          }}
        >
          Sie haben bisher keine Schäden gemeldet.
        </GroupuiText>
        <GroupuiText
          style={{
            fontSize: '14px'
          }}
        >Weiterhin eine gute Fahrt!</GroupuiText>
        <p style={{
          textAlign: 'center'
        }}>
          <GroupuiButton
            disabled={false}
            fullwidth={false}
            inverted={false}
            size="m"
            type="button"
            variant="secondary"
            onClick={() => setShowModal(true)}
          >
            <GroupuiText>
              Unfallhilfe Pannenhilfe öffnen
            </GroupuiText>
          </GroupuiButton>
        </p>
      </GroupuiCard>
      <GroupuiModal
        displayed={showModal}
        closeButton={true}
        onGroupuiModalClose={() => setShowModal(false)}
        iconMargin="16px"
        xs={12}
        s={12}
        m={12}
        l={12}
        xl={10}
        xxl={10}
        background="light"
        className='modal-dashboard'
      >
        <GroupuiDivider style={{marginTop: '25px'}} />
          <div style={{textAlign: 'center', marginBottom: 20}}>
            <img style={{margin: "25px 0"}} width="50" height="50" src="https://groupui-assets.apps.emea.vwapps.io/icons/vwag/warning-24.svg" alt="icon-warning" />
            <GroupuiText
              style={{
                fontSize: 30
              }}
            >Unfallhilfe Pannenhilfe </GroupuiText>
          </div>

          <CheckList text={`Bietet schnelle und professionelle Unterstützung im Schadensfall`} />

          <CheckList text={"Liefert dem Audi Notdienst wichtige Informationen"}/>

          <CheckList text={"Kontaktiert auf Wunsch einen Audi Partner"}/>

          <CheckList text={"Kann im Falle eines schwerwiegenden Unfalls automatisch einen Notruf absetzen"}/>

          <GroupuiButton
            disabled={false}
            fullwidth={true}
            inverted={false}
            size="m"
            type="button"
            variant="primary"
            onClick={() => console.log('redirect')}
            style={{marginTop: '100px'}}
          >
            <GroupuiText style={{color: 'white'}}>
              Unfallhilfe Pannenhilfe öffnen
            </GroupuiText>
          </GroupuiButton>
      </GroupuiModal>
    </div>
  );
}