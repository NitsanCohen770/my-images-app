export interface Inside {
    id: string;
    title: string;
  }

return (
    item.map((inside):Inside => {
        <ul key={inside.id}>
            <li>{inside.title}</li>
        </ul>
    })
)
}
