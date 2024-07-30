export default function Button({ title = 'Login', onClick = () => { }, color = '' }) {
  
    const getColorVariant = {
        'indigo': 'bg-indigo-700',
        'green': 'bg-green-500',
        'red': 'bg-red-500',
        'blue': 'bg-blue-500',
        'purple': 'bg-purple-500',
    }
   
    return (
      <button
        className={`${getColorVariant[color]} text-white p-4 rounded-xl w-full`}
        onClick={onClick}
      >
        {title}
      </button>
    )

}