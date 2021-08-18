const eventListenerPromise = new Promise((resolve, reject) => {
  folders.addEventListener('click', function (event) {
    if (event.target.id === 'folder') {
      folder_name = event.target.innerHTML;

      console.log(folder_name);
      return folder_name;
    }
  });
});

<ul>
  {bestseller.buy_links.map(({ name, url }) => (
    <li key={url}>
      <a style={{ color: 'white' }} href={url}>
        {name}
      </a>
    </li>
  ))}
</ul>;


constructor(props) {
    super(props);
    this.state = {
      name:'',
    street:'',
    city:'',
     state:'',
     zip:'',
     phone:'',
     message:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, element) {
    this.setState(prevState => {...prevState,[element]:event.target.value});
  

  handleSubmit(event) {
    event.preventDefault();
// ...your post request - I suggest to use axios like this (npm install axios)
axios.post('http://localhost:3000/send', {
  this.state
})
.then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});
  }