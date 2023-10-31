export default function Fanpage() {
  return (
    <div className=' overflow-hidden md:w-full'>
      <iframe
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCSD.Vie&tabs=timeline&width=500&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId'
        width='500'
        height='300'
        style={{ border: 0, overflow: 'hidden' }}
        allowfullscreen={true}
        loading='lazy'
      ></iframe>
    </div>
  );
}
