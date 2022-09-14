import {useMemo} from 'react'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'




export default function ContactMap() {
    const {isloaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyAWtK8upvvKj3XKv6SWhqYlw71GOqO6rd0"
    })

    if(!isloaded) return <div>loading...</div>
  return <Map />
}

function Map () {
  return <GoogleMap zoom  = {10} center = {{lat:44, lng:-80}} mapContainerClassName = "map-container"></GoogleMap>
}