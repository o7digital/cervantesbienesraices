"use client"
import React, { useRef, useEffect, PropsWithChildren } from 'react';

import '@fancyapps/ui/dist/fancybox/fancybox.css';

import { OptionsType } from '@fancyapps/ui/types/Fancybox/options';

interface Props {
   options?: Partial<OptionsType>;
   delegate?: string;
}

const Fancybox = (props: PropsWithChildren<Props>) => {
   const containerRef = useRef(null);

   useEffect(() => {
      const container = containerRef.current;

      const delegate = props.delegate || '[data-fancybox]';
      const options = props.options || {};
      let nativeFancybox: any;
      let mounted = true;

      import('@fancyapps/ui').then((mod: any) => {
         if (!mounted) return;
         nativeFancybox = mod.Fancybox || mod.default?.Fancybox;
         nativeFancybox?.bind(container, delegate, options);
      });

      return () => {
         mounted = false;
         nativeFancybox?.unbind(container);
         nativeFancybox?.close();
      };
   });

   return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox
