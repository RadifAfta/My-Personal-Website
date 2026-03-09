import React, { useState, useEffect } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';

const GitlabCalendar = ({ username, colorScheme = "dark", customTheme }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        // Menggunakan CORS proxy alternatif (codetabs) yang lebih memperbolehkan request GitLab
        const response = await fetch(`https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(`https://gitlab.com/users/${username}/calendar.json`)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch GitLab data. Make sure the username is correct and the profile is public.');
        }
        const json = await response.json();
        
        // Transform { "2024-01-01": 2, ... } to ActivityCalendar array
        let transformedData = Object.entries(json).map(([date, count]) => {
          let level = 0;
          if (count > 0 && count <= 2) level = 1;
          else if (count > 2 && count <= 5) level = 2;
          else if (count > 5 && count <= 10) level = 3;
          else if (count > 10) level = 4;
          
          return { date, count, level };
        });

        transformedData.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        if (transformedData.length === 0) {
            // Need at least one item to render safely
            transformedData = [{ date: new Date().toISOString().split('T')[0], count: 0, level: 0 }];
        }
        
        setData(transformedData);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCalendar();
  }, [username]);

  if (loading) return <div className="text-gray-400 text-sm py-4 p-4 text-center">Loading GitLab contributions...</div>;
  if (error) return <div className="text-red-400 text-sm py-4 p-4 text-center">{error}</div>;

  // Violets/Fuchsias based on site's theme
  const fuchsiaTheme = {
    light: ['#f3e8ff', '#d8b4fe', '#c084fc', '#a855f7', '#7e22ce'],
    dark: ['#1a0f2e', '#4c1d95', '#7c3aed', '#8b5cf6', '#d8b4fe']
  };

  return (
    <div className="w-full flex justify-center py-4 px-2">
      <ActivityCalendar 
        data={data} 
        theme={customTheme || fuchsiaTheme} 
        colorScheme={colorScheme}
        labels={{
            totalCount: `{{count}} contributions in the last year`,
        }}
        showWeekdayLabels={true}
      />
    </div>
  );
};

export default GitlabCalendar;
