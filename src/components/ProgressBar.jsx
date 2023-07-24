const ProgressBar = ({ cpuUsage }) => {
    let colorClass = 'bg-green-500';

    if (cpuUsage > 50 && cpuUsage <= 70) {
      colorClass = 'bg-yellow-400';
    } else if (cpuUsage > 70) {
      colorClass = 'bg-red-400';
    }

    const progress = `${cpuUsage}%`;

    return (
      <div className="w-full h-4 rounded align-middle bg-gray-200">
        <div className={`${colorClass} h-4 align-middle rounded text-xs leading-none text-center text-black`} style={{ width: progress }}>
        <small className=" absolute p-1 ">{progress}</small>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;