import React, { useState } from "react"

import Layout from "../components/layout"

import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'

import Map from './map'

import Modal from 'react-responsive-modal'
import * as Data from './data.json'


const MapComponent = withScriptjs(withGoogleMap(Map));

export default function IndexPage() {

  const [modal, setmodal] = useState(false);
  const [data, setData] = useState(null)

  return (
    <Layout>

      <div className="flex mb-4">

        <div className="w-1/2 mb-4 ml-2 mr-2 shadow-lg " >

          <div style={{ width: "100%", height: "100vh" }} >

            <MapComponent
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${"AIzaSyBsytc-M60hbCyVoYJaLYYb6hMfwgmB3Mc"}`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              setmodal={setmodal}
              setData={setData}
            />
          </div>
        </div>

        <div className='w-1/2' >
          <div className='flex flex-wrap'>
            {Data.features.map(j => (
              <div className="w-2/5 mb-4 ml-2 mr-2 shadow-lg " >
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img className="rounded" src={j.properties.Image} />
                  <div className="px-6 py-4">
                    <h4 className="font-bold text-xl mb-2" style={{ fontFamily: "coustard" }} >{j.properties.NAME}</h4>
                    <p className="text-gray-700 text-base" style={{ fontFamily: 'Gentium Basic' }} >{j.properties.DESCRIPTION}</p>
                    <hr style={{ borderTop: "3px solid purple" }} />
                  </div>
                </div>
              </div>
            ))}
          </div></div>
      </div>

      {data ? <Modal
        open={modal}
        onClose={() => setmodal(false)}
      >
        <div className="flex">
          <div className="w-full">
            <img src={data.properties.Image} style={{ width: '100px', height: '100px' }} />
          </div>
          <div className="w-full ml-3">
            <h1>{data.properties.NAME}</h1>
            <p>{data.properties.DESCRIPTION}</p>
          </div>
        </div>
      </Modal>
        : null}



    </Layout>
  )
}



