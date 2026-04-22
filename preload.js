const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  loadProjects: () => ipcRenderer.invoke('projects:load'),
  saveProjects: (data) => ipcRenderer.invoke('projects:save', data),
  loadSettings: () => ipcRenderer.invoke('settings:load'),
  saveSettings: (data) => ipcRenderer.invoke('settings:save', data),
  pickFolder: () => ipcRenderer.invoke('folder:pick'),
  openFolder: (p) => ipcRenderer.invoke('folder:open', p),
  openExternal: (url) => ipcRenderer.invoke('external:open', url),

  // Sync
  syncStatus: () => ipcRenderer.invoke('sync:status'),
  pickDataFolder: () => ipcRenderer.invoke('sync:pickDataFolder'),
  clearDataFolder: () => ipcRenderer.invoke('sync:clearDataFolder'),

  // Export / import
  exportData: () => ipcRenderer.invoke('data:export'),
  importData: () => ipcRenderer.invoke('data:import'),

  // External-change subscription
  onExternalChange: (cb) => {
    const h = () => cb();
    ipcRenderer.on('data:external-change', h);
    return () => ipcRenderer.removeListener('data:external-change', h);
  }
});
