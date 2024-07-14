// DynamicServiceLoader.js
import React from 'react';
import { useParams } from 'react-router-dom';
import PaintProtectionFilm from './service/PaintProtectionFilm';
import CeramicCoat from './service/CeramicCoat';
import VinylWrap from './service/VinylWrap';
import WindowTint from './service/WindowTint';
import BrakeCaliperPaint from './service/BrakeCaliperPaint';
import StarsCeiling from './service/StarsCeiling';

const serviceComponents = {
  "paint-protection-film": PaintProtectionFilm,
  "ceramic-coat": CeramicCoat,
  "vinyl-wrap": VinylWrap,
  "window-tint": WindowTint,
  "brake-caliper-paint": BrakeCaliperPaint,
  "stars-in-the-ceiling": StarsCeiling,
};

const DynamicServiceLoader = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  const ServiceComponent = serviceComponents[serviceId] || (() => <div>Service not found</div>);

  return <ServiceComponent />;
};

export default DynamicServiceLoader;
