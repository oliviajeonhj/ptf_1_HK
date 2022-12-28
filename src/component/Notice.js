import noticeDBjson from '../json/allDB.json';

const Notice = () => {
  const noticeDb = noticeDBjson.noticeDB;
  return (
    <section className="py-5 text-center" id="notice">
      <h3>공지사항</h3>
      <div className="py-5 container-md text-start">
        <ul>
          {
            noticeDb.map(function (value, index) {
              return (
                <li key={'notice' + index}>
                  <strong className='d-block border-bottom py-2 ' role="button" onClick={e => { console.log(e.target.nextSibling.classList.toggle('d-none')) }}>{value.subject}</strong>
                  <p className='py-5 d-none'>{value.content}</p>
                </li>
              )
            }
            )
          }
        </ul>
      </div>
    </section>
  )
}

export default Notice;