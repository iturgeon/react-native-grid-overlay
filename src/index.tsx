import React from 'react';
import { ColorValue, View } from 'react-native';
import { Text, Line, Svg } from 'react-native-svg';

const brightOpacity = 0.25;
const dimOpacity = 0.08;

export const GridOverlay = ({
  color = 'white',
  opacity = 1,
  stepSize = 10,
  highlightGroupSize = 5,
  height = 100,
  width = 100,
  children,
}: IGridOverlayProps) => {
  const { linesH, linesW } = React.useMemo(() => {
    const numLinesH = Math.ceil(height / stepSize);
    const numLinesW = Math.ceil(width / stepSize);
    return {
      linesH: Array.from({ length: numLinesH }, (_, i) => i * stepSize),
      linesW: Array.from({ length: numLinesW }, (_, i) => i * stepSize),
    };
  }, [stepSize, height, width]);

  return (
    <View
      pointerEvents="none"
      style={{ position: 'absolute', top: 0, left: 0, height, width, opacity }}
    >
      {children}
      <Svg height={height} width={width}>
        {linesH.map((y, i) => {
          return (
            <React.Fragment key={i}>
              <Line
                x1="0"
                x2={width}
                y1={y}
                y2={y}
                stroke={color}
                opacity={i % highlightGroupSize ? dimOpacity : brightOpacity}
                strokeWidth="1"
              />
              {i % highlightGroupSize ? null : (
                <Text
                  fill={color}
                  opacity={0.8}
                  fontSize="8"
                  x={width - 20}
                  y={y + 8}
                >
                  {y}
                </Text>
              )}
            </React.Fragment>
          );
        })}
        {linesW.map((x, i) => {
          return (
            <React.Fragment key={i}>
              <Line
                x1={x}
                x2={x}
                y1={0}
                y2={height}
                stroke={color}
                opacity={i % highlightGroupSize ? dimOpacity : brightOpacity}
                strokeWidth="1"
              />
              {i % highlightGroupSize ? null : (
                <Text
                  transform={`rotate(90, ${x + 3}, ${height - 100})`}
                  fill={color}
                  opacity={0.8}
                  fontSize="8"
                  x={x + 3}
                  y={height - 100}
                >
                  {x}
                </Text>
              )}
            </React.Fragment>
          );
        })}
      </Svg>
    </View>
  );
};

interface IGridOverlayProps {
  color?: ColorValue;
  opacity?: number;
  stepSize?: number;
  highlightGroupSize?: number;
  height?: number;
  width?: number;
  children?: React.ReactNode;
}
