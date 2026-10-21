// Nexin suite registry — add new apps here; persona.roles[appId] grants access.
window.NEXIN = (function () {
  const apps = [
    { id: 'hris', name: 'HRIS', desc: 'People, time off, timesheets, payroll', href: 'hris.dc.html', mark: 'HR' },
    { id: 'band', name: 'Band Admin', desc: 'Members, governance, elections', href: 'band-admin.dc.html', mark: 'BA' }
  ];
  const personas = [
    { id: 'tom', name: 'Tom Adeyemi', initials: 'TA', roles: { hris: 'HR Admin', band: 'Band Administrator' } },
    { id: 'marcus', name: 'Marcus Chen', initials: 'MC', roles: { hris: 'Manager', band: 'Council member' } },
    { id: 'amara', name: 'Amara Okafor', initials: 'AO', roles: { hris: 'Employee' } },
    { id: 'peter', name: 'Peter Vance', initials: 'PV', roles: { band: 'Electoral Officer' } }
  ];
  const KEY = 'nexin.persona';
  const current = () => { let id; try { id = localStorage.getItem(KEY); } catch (e) {} return personas.find(p => p.id === id) || personas[0]; };
  const setPersona = id => { try { localStorage.setItem(KEY, id); } catch (e) {} };
  const appsFor = p => apps.filter(a => p.roles[a.id]);
  const open = appId => { const a = apps.find(x => x.id === appId); if (a) location.href = a.href; };
  const label = p => p.name + ' — ' + apps.filter(a => p.roles[a.id]).map(a => a.name + ': ' + p.roles[a.id]).join(', ');
  return { apps, personas, current, setPersona, appsFor, open, label };
})();
