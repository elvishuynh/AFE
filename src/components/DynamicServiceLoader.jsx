// DynamicServiceLoader.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Ppf from './service/Ppf';
import CeramicCoating from './service/CeramicCoating';
import VinylWrapping from './service/VinylWrapping';
import WindowTinting from './service/WindowTinting';
import BrakeCaliper from './service/BrakeCaliper';
import StarsCeiling from './service/StarsCeiling';

const serviceComponents = {
  ppf: Ppf,
  cc: CeramicCoating,
  vw: VinylWrapping,
  wt: WindowTinting,
  bcp: BrakeCaliper,
  stars: StarsCeiling,
};

const DynamicServiceLoader = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  const ServiceComponent = serviceComponents[serviceId] || (() => <div>Service not found</div>);

  return <ServiceComponent />;
};

export default DynamicServiceLoader;
