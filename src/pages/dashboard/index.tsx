import React, { useState } from 'react';
import { useInfiniteList } from 'hooks/infiniteList.hook';
// UI
import { 
  GroupuiButton, 
  GroupuiCard, 
  GroupuiText, 
  GroupuiModal
} from '@sdc-wob-type-3/group-ui-react';
// scss
import './dashboard.scss'
// icons
import CAR_CRASH_24 from '../../icons/car-crash-24.svg'
import CHECK_32 from '../../icons/check-32.svg'

interface InfiniteCheckList {
  text: string
}

// List
const CheckList:React.FC<InfiniteCheckList> = ({text}) => {
  return (
    <div className="contain-center" style={{display:'flex', alignItems: 'flex-start'}}>
      <img
        width="32"
        height="32"
        src={CHECK_32} alt="icon-check"
        color="#20607E"
      />
      <GroupuiText
        style={{
          margin: '0px 29px 20px 20px',
          fontSize: 16,
          color: '#4C5356',
          letterSpacing: 0.2,
        }}>
        {text}
      </GroupuiText>
    </div>
  )
}

export function Dashboard(props:any) {
  const { infiniteListState, infiniteListAction  } = useInfiniteList('https://pokeapi.co/api/v2/pokemon')

  const [showModal, setShowModal] = useState(false)

  return (
    <div
      className="main-container"
    >
      <GroupuiText
        style={{
          fontSize: 20,
          margin: '30px 0 10px 0',
          fontWeight: 'bold',
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
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          Sie haben bisher keine Schäden gemeldet.
        </GroupuiText>
        <GroupuiText
          style={{
            fontSize: '14px',
            fontWeight: 'bold'
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
            <GroupuiText style={{
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
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
        {/* <GroupuiDivider style={{marginTop: '25px'}} /> */}
        <div style={{textAlign: 'center', marginBottom: 20}}>
          <img
            style={{
              marginTop: "80px"
            }}
            width="64"
            height="64"
            src={CAR_CRASH_24} alt="icon-warning"
          />
          <GroupuiText
            style={{
              fontSize: 28,
              // fontFamily: '',
              fontWeight: 'bold',
              color: '#20607E',
              margin: '10px 0 25px 0',
              lineSpacing: 42,
              // letterSpacing: 0.2
            }}
          >Unfallhilfe</GroupuiText>
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
          className="contain-center"
          onClick={() => console.log('redirect')}
          style={{
            marginTop: '25px',
          }}
        >
          <GroupuiText className="text-common">
            Audi Notdienst anrufen
          </GroupuiText>
        </GroupuiButton>

        <GroupuiButton
          disabled={false}
          fullwidth={true}
          inverted={false}
          size="m"
          type="button"
          variant="primary"
          className="contain-center"
          onClick={() => console.log('redirect')}
          style={{
            marginTop: '16px',
          }}
        >
          <GroupuiText className="text-common">
            Glasschaden aufnehmen
          </GroupuiText>
        </GroupuiButton>

        <GroupuiButton
          disabled={false}
          fullwidth={true}
          inverted={false}
          size="m"
          type="button"
          variant="primary"
          className="contain-center"
          onClick={() => console.log('redirect')}
          style={{
            marginTop: '16px',
          }}
        >
          <GroupuiText className="text-common">
            Unfallschaden aufnehmen
          </GroupuiText>
        </GroupuiButton>
        
        <GroupuiButton
          disabled={false}
          fullwidth={true}
          inverted={false}
          size="m"
          type="button"
          variant="primary"
          className="contain-center"
          onClick={() => console.log('redirect')}
          style={{
            marginTop: '16px',
            marginBottom: '142px'
          }}
        >
          <GroupuiText className="text-common">
            Meine Schäden
          </GroupuiText>
        </GroupuiButton>
      </GroupuiModal>
    </div>
  );
}