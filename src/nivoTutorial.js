import React, { useState } from 'react';
import { ScatterPlot } from '@nivo/scatterplot';
import {data} from './service/fakeData'

const MyScatterplot = () => {
    const [hoveredNode, setHoveredNode] = useState(null);

    const handleNodeHover = (node) => {
        setHoveredNode(node);
    };

    const handleNodeLeave = () => {
        setHoveredNode(null);
    };

    const renderTooltip = ({ node }) => {
        return (
            <div
                style={{
                    background: '#fff',
                    padding: '9px 12px',
                    border: '1px solid #ccc',
                    color: node.color,
                }}
            >
                <div>
                    <strong>
                        {node.data.username}: {node.data.language}
                    </strong>
                </div>
                <div>Bewertung: {node.data.y}</div>
            </div>
        );
    };

    const renderLegend = () => {
        const legendItems = [
            { label: 'User 1', color: '#6495ED' },
            { label: 'User 2', color: '#FFA07A' },
            { label: 'User 3', color: '#00FF00' },
            { label: 'User 4', color: '#000000' },
        ];

        return (
            <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px' }}>
                {legendItems.map((item) => (
                    <div className="legend-item" key={item.label}>
                        <span className="legend-circle" style={{ backgroundColor: item.color }}></span>
                        <div className={`legend-${item.label.toLowerCase().replace(' ', '')}`}>{item.label}</div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div style={{ position: 'relative', backgroundColor: '#fff', padding: '20px' }}>
            <ScatterPlot
                data={data}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: -1.5, max: 1.5 }}
                margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
                axisBottom={{ tickSize: 0, tickPadding: 10, tickRotation: 0, legend: '', legendPosition: 'middle' }}
                axisLeft={{ tickSize: 0, tickPadding: 10, tickRotation: 0, legend: 'Bewertung', legendPosition: 'middle' }}
                width={600}
                height={400}
                colors={['#6495ED', '#FFA07A', '#00FF00', '#000000']}
                dotSize={10}
                dotBorderColor='#fff'
                animate={true}
                onMouseEnter={handleNodeHover}
                onMouseMove={handleNodeHover}
                onMouseLeave={handleNodeLeave}
                tooltip={renderTooltip}
            />

            {hoveredNode && (
                <div
                    style={{
                        position: 'absolute',
                        top: hoveredNode.y + 10,
                        left: hoveredNode.x + 10,
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        padding: '5px',
                    }}
                ></div>
            )}

            {renderLegend()}
        </div>
    );
};

export default MyScatterplot;




