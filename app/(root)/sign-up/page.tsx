function SignUpPage() {
  return (
    <>
      <h1 className="text-center font-bold text-4xl mb-20 mt-20">회원가입</h1>
      <form className="text-center w-[480px] m-auto">
        <h1 className="text-left  mb-2 text-[18px]">이메일</h1>
        <input
          className="p-[18px] w-full border-[1.5px] border-gray-300
      rounded-md focus:border-black outline-none px-8 text-xl"
          type="text"
        />
        <h1 className="text-left  mb-2 text-[18px]">비밀번호</h1>
        <input
          className="p-[18px] w-full border-[1.5px] border-gray-300
      rounded-md focus:border-black outline-none px-8 text-xl"
          type="password"
        />
        <h1 className="text-left  mb-2 text-[18px]">비밀번호 확인</h1>
        <input
          className="p-[18px] w-full border-[1.5px] border-gray-300
      rounded-md focus:border-black outline-none px-8 text-xl"
          type="password"
        />
      </form>
    </>
  );
}

export default SignUpPage;
