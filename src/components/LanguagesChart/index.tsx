import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { Language } from '../../hooks/profile';
import isMobile from '../../utils/isMobile';

interface Props {
  data: Language[];
}

export const LanguagesChart: React.FC<Props> = ({
  data /* see data tab */,
}) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    colors={{ scheme: 'nivo' }}
    theme={{
      textColor: '#fff',
      tooltip: {
        container: {
          color: '#000',
        },
      },

      labels: {
        text: {
          fill: '#fff',
        },
      },
      markers: {
        lineColor: '#fff',
        lineStrokeWidth: 1,
        text: { fill: '#fff' },
      },
      annotations: {
        text: {
          fontSize: 13,
          outlineWidth: 2,
          outlineColor: '#ffffff',
        },
      },
    }}
    borderWidth={1}
    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
    radialLabelsSkipAngle={10}
    radialLabelsTextColor="#fff"
    radialLabelsLinkColor={{ from: 'color' }}
    sliceLabelsSkipAngle={10}
    sliceLabelsTextColor="#333333"
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'ruby',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'c',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'go',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'python',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'scala',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'lisp',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'elixir',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'javascript',
        },
        id: 'lines',
      },
    ]}
    legends={[
      {
        anchor: 'bottom',
        direction: isMobile() ? 'column' : 'row',
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#fff',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#fff',
            },
          },
        ],
      },
    ]}
  />
);
