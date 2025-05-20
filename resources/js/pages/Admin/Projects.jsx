import { useForm } from '@inertiajs/react'
import { useState } from 'react'
import MainLayout from '@/layouts/MainLayout'

export default function Projects({ projects, ...props }) {

  const { data, setData, post, put, delete: destroy, reset, errors, processing } = useForm({
    id: null,
    title: '',
    description: '',
    github_url: '',
    prototype_url: '',
    image_path: '',
    is_featured: false,
  })

  const [editMode, setEditMode] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  
    if (editMode) {
      put(`/admin/projects/${data.id}`, {
        preserveScroll: true,
        onSuccess: () => {
          reset()
          setEditMode(false)
        }
      })
    } else {
      post('/admin/projects', {
        preserveScroll: true,
        onSuccess: () => {
          reset()
          setEditMode(false)
        }
      })
    }
  }  

  const handleEdit = (project) => {
    setData(project)
    setEditMode(true)
  }

  const handleDelete = (id) => {
    if (confirm('¿Eliminar este proyecto?')) {
      destroy(`/admin/projects/${id}`)
    }
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Administrar Proyectos</h1>
        {props.flash?.message && (
            <div className="p-2 mb-4 bg-green-100 text-green-800 border border-green-300 rounded">
                {props.flash.message}
            </div>
        )}

        <form onSubmit={handleSubmit} className="mb-10 space-y-4 bg-white p-6 shadow">
            <input className="w-full border p-2 rounded" placeholder="Título" value={data.title} onChange={(e) => setData('title', e.target.value)} />
            {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
            <textarea className="w-full border p-2 rounded" placeholder="Descripción" value={data.description} onChange={(e) => setData('description', e.target.value)} />
            {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
            <input className="w-full border p-2 rounded" placeholder="URL GitHub" value={data.github_url} onChange={(e) => setData('github_url', e.target.value)} />
            {errors.github_url && <p className="text-sm text-red-500">{errors.github_url}</p>}
            <input className="w-full border p-2 rounded" placeholder="URL Prototipo" value={data.prototype_url} onChange={(e) => setData('prototype_url', e.target.value)} />
            {errors.prototype_url && <p className="text-sm text-red-500">{errors.prototype_url}</p>}
            <input className="w-full border p-2 rounded" placeholder="Nombre de la imagen" value={data.image_path} onChange={(e) => setData('image_path', e.target.value)} />
            {errors.image_path && <p className="text-sm text-red-500">{errors.image_path}</p>}
            <label className="flex items-center gap-2">
                <input type="checkbox" checked={data.is_featured} onChange={(e) => setData('is_featured', e.target.checked)} />
                ¿Es destacado?
            </label>
            <input type="submit" disabled={processing} value={processing ? 'Guardando...' : (editMode ? 'Actualizar' : 'Crear')} className="w-full border p-2 bg-gray-800 text-white cursor-pointer hover:bg-gray-700 disabled:opacity-50" />
            <input type="button" value="Cancelar" className="w-full border p-2 bg-gray-800 text-white cursor-pointer hover:bg-gray-700" 
                onClick={() => {
                    reset()
                    setEditMode(false)
                }}
            />
        </form>

        <table className="w-full mt-8 border">
            <thead>
                <tr className="bg-gray-100 text-left">
                    <th className="p-2">Título</th>
                    <th className="p-2">Descripción</th>
                    <th className="p-2">GitHub</th>
                    <th className="p-2">Prototipo</th>
                    <th className="p-2">Imagen</th>
                    <th className="p-2">Destacado</th>
                    <th className="p-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project) => (
                <tr key={project.id} className="border-t">
                    <td className="p-2">{project.title}</td>
                    <td className="p-2">{project.description}</td>
                    <td className="p-2">
                    <a href={project.github_url} target="_blank" className="text-blue-600 underline">GitHub</a>
                    </td>
                    <td className="p-2">
                    {project.prototype_url && (
                        <a href={project.prototype_url} target="_blank" className="text-blue-600 underline">Prototipo</a>
                    )}
                    </td>
                    <td className="p-2">{project.image_path}</td>
                    <td className="p-3">{project.is_featured ? '✅' : '❌'}</td>
                    <td className="p-2 flex gap-2">
                        <input type="button" value="Editar" onClick={() => handleEdit(project)} className="border p-2 cursor-pointer"/>
                        <input type="button" value="Eliminar" onClick={() => handleDelete(project.id)} className="border p-2 cursor-pointer"/>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
    </MainLayout>
  )
}
