import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './DepartmentStatsCounter.css'; 

const stats = [
  { label: 'Faculty', count: 42 },
  { label: 'Staff', count: 18 },
  { label: 'UG Students', count: 320 },
  { label: 'PG Students', count: 120 },
  { label: 'Research Scholars', count: 40 },
  { label: 'Publications', count: 875 },
];

const DepartmentStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="dept-stats-section">
      <div className="overlays">
        <h2 className="dept-heading">
          Department of Computer Science & Engineering
        </h2>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <div className="stat-number">
                {inView ? <CountUp end={stat.count} duration={5} /> : '00'}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentStats;
