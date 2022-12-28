const Request = () => {
  return (
  <section className="py-5 text-center" id="request">
    <h3 className="pb-3">문의</h3>
    <form action="" className="d-flex flex-column">
      <fieldset className="inputtags">
        <legend>답변 소요 기간은 평일 기준 2~3일 입니다.</legend>
        <ul>
          <li>
            <label for="userName">이름</label>
            <input type="text" name="userName" id="userName" required />
          </li>
          <li>
            <label for="contactEmail">연락처</label>
            <input type="email" name="contactEmail" id="contactEmail" placeholder="이메일 주소를 입력해주세요" maxlength="" required />
          </li>
          <li>
            <label for="comment">문의내용</label>
            <input type="text" name="comment" id="comment" required />
          </li>
        </ul>
        <input type="radio" id="agree" /><label for="agree">개인정보정책동의</label>
          <button type="submit">전송</button>
      </fieldset>
    </form>
  </section>

  )
}

export default Request;