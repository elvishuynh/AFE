// DynamicServiceLoader.js
import React from 'react';
import { useParams } from 'react-router-dom';
import PaintProtectionFilm from './service/PaintProtectionFilm';
import CeramicCoating from './service/CeramicCoating';
import VinylWrapping from './service/VinylWrapping';
import WindowTinting from './service/WindowTinting';
import BrakeCaliper from './service/BrakeCaliper';
import StarsCeiling from './service/StarsCeiling';

const serviceComponents = {
  "paint-protection-film": PaintProtectionFilm,
  "ceramic-coating": CeramicCoating,
  "vinyl-wrapping": VinylWrapping,
  "window-tinting": WindowTinting,
  "brake-caliper-painting": BrakeCaliper,
  "stars-in-the-ceiling": StarsCeiling,
};

const DynamicServiceLoader = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  const ServiceComponent = serviceComponents[serviceId] || (() => <div>Service not found</div>);

  return <ServiceComponent />;
};

export default DynamicServiceLoader;
