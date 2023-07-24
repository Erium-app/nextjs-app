const os = require('os');
const si = require('systeminformation');


// Get CPU usage
function getCpuUsage() {
    return new Promise((resolve, reject) => {
      si.currentLoad()
        .then((data) => {
          resolve(data.currentload.toFixed(2));
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
  // Convert size from MB to GB
  function convertMBtoGB(sizeInMB) {
    const sizeInGB = sizeInMB / 1024;
    return sizeInGB.toFixed(2);
  }
  
  // Get memory usage
  function getMemoryUsage() {
    return new Promise((resolve, reject) => {
      const totalMemory = os.totalmem();
      const freeMemory = os.freemem();
      if (totalMemory === undefined || freeMemory === undefined) {
        reject('Failed to retrieve memory information');
        return;
      }
      const usedMemory = totalMemory - freeMemory;
      const memoryUsage = ((usedMemory / totalMemory) * 100).toFixed(2);
      const usedMemoryGB = convertMBtoGB(usedMemory);
      const freeMemoryGB = convertMBtoGB(freeMemory);
      resolve({
        usage: memoryUsage,
        used: usedMemoryGB,
        free: freeMemoryGB
      });
    });
  }
  
  // Get disk usage
  function getDiskUsage() {
    return new Promise((resolve, reject) => {
      si.fsSize()
        .then((data) => {
          if (!data || data.length === 0) {
            reject('Failed to retrieve disk information');
            return;
          }
          const diskUsage = data[0].use.toFixed(2);
          const usedDiskGB = convertMBtoGB(data[0].used);
          const freeDiskGB = convertMBtoGB(data[0].size - data[0].used);
          resolve({
            usage: diskUsage,
            used: usedDiskGB,
            free: freeDiskGB
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

// Main function
export async function GET(req) {
//   try {
//     const CPUUSAGE = await getCpuUsage();
//     const MEMORYINFO = await getMemoryUsage();
//     const DISKINFO = await getDiskUsage();

//     const systemInfo= {
//         cpuUsage:CPUUSAGE,
//         memoryUsage: MEMORYINFO.usage,
//         usedMemory: MEMORYINFO.used,
//         freeMemory: MEMORYINFO.free,
//         diskUsage: DISKINFO.usage,
//         usedDiskSpace: DISKINFO.used,
//         freeDiskSpace: DISKINFO.free
//     }
//     // console.log('CPU Usage: ' + CPUUSAGE + '%');
//     // console.log('Memory Usage: ' + MEMORYINFO.usage + '%');
//     // console.log('Used Memory: ' + MEMORYINFO.used + ' GB');
//     // console.log('Free Memory: ' + MEMORYINFO.free + ' GB');
//     // console.log('Disk Usage: ' + DISKINFO.usage + '%');
//     // console.log('Used Disk Space: ' + DISKINFO.used + ' GB');
//     // console.log('Free Disk Space: ' + DISKINFO.free + ' GB');

//     // return new Response(JSON.stringify(user), {status: 201})
//     return new Response(JSON.stringify(systemInfo), {status: 200})
//   } catch (error) {
//     console.error('Error:', error);
//   }

try {
    const cpuUsages = await getCpuUsage();
    const memoryInfo = await getMemoryUsage();
    const diskInfo = await getDiskUsage();

    const cpuUsage = cpuUsages 
    const memoryUsage = memoryInfo.usage 
    const usedMemory = memoryInfo.used 
    const freeMemory = memoryInfo.free 
    const diskUsage = diskInfo.usage 
    const usedDiskSpace = diskInfo.used 
    const freeDiskSpace = diskInfo.free 
    const sysInfo = JSON.stringify({ cpuUsage, memoryUsage, usedMemory, freeMemory, diskUsage, usedDiskSpace, freeDiskSpace})
    
    return new Response(sysInfo, { status: 200 })
} catch (error) {
    console.error('Error:', error);
  }
}
