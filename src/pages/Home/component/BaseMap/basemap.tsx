import { useRef } from "react";
import Map, { MapRef } from "react-map-gl/maplibre";
import DeckGL from "@deck.gl/react";
import { useTheme } from "@mui/material/styles";

// Example: using a ScatterplotLayer (you can swap with your GIS layers later)
import { ScatterplotLayer } from "@deck.gl/layers";

const DAY_STYLE =
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
const NIGHT_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

const INITIAL_VIEW_STATE = {
  longitude: 77.209, // Example: Delhi
  latitude: 28.6139,
  zoom: 4,
  pitch: 0,
  bearing: 0,
};

export const BaseMap = () => {
  const theme = useTheme();
  const mapRef = useRef<MapRef>(null);

  // pick style based on theme
  const mapStyle = theme.palette.mode === "dark" ? NIGHT_STYLE : DAY_STYLE;

  // Example deck.gl layer
  const layers = [
    new ScatterplotLayer({
      id: "scatter-layer",
      data: [
        { position: [77.209, 28.6139], size: 100 }, // Delhi
        { position: [72.8777, 19.076], size: 100 }, // Mumbai
      ],
      getPosition: (d: any) => d.position,
      getRadius: (d: any) => d.size,
      getFillColor: [255, 0, 0],
      pickable: true,
    }),
  ];

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <DeckGL
        controller={true}
        initialViewState={INITIAL_VIEW_STATE}
        layers={layers}
      >
        <Map
          ref={mapRef}
          mapStyle={mapStyle}
        //   attributionControl
        />
      </DeckGL>
    </div>
  );
};
