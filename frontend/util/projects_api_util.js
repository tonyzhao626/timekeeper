export const fetchProjects = () => (
  $.ajax({
    method: 'GET',
    url: '/api/projects'
  })
);

export const fetchProject = id => (
  $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`,
  })
);

export const createProject = project => (
 $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: project
  })
);

export const updateProject = project => (
  $.ajax({
    method: 'PATCH',
    url: `/api/projects/${project.id}`,
    data: { project }
  })
);

export const destroyProject = project => (
  $.ajax({
    method: 'DELETE',
    url: `api/projects/${project.id}`
  })
);

export const searchProjects = query => (
  $.ajax({
    method: 'GET',
    url: `/api/projects/search`,
    data: { query }
  })
);
