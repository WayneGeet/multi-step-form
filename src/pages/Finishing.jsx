import bg_mobile from "../images/bg-sidebar-mobile.svg";
import Buttons from "../components/Buttons";
import Finish from "../components/Finish"
const Finishing = () => {
  return (
    <div className="bg-slate-50 max-h-screen overflow-hidden">
      
      <Buttons/>
      
      <section>
        <div className="w-full bg-red-500">
            <img src={bg_mobile} alt="" className="object-contain w-full max-h-full" />
          </div>
      </section>

      <section className="px-5 relative bottom-28">
        <article className="mx-auto shadow-xl rounded-lg bg-white min-h-96 w-full">
            <div className="px-10 mx-auto pt-7 mb-2">
              <h2 className="font-bold text-3xl text-blue-950">Finishing up</h2>
              <p className="text-slate-400 pt-3">Double-check everything looks OK before confirming</p>
            </div>

            <div className="px-10 pb-10">
                <Finish/>
            </div>

        </article>
          <div className="bg-red-400 relative">
            <button className="px-6 py-2 rounded bg-sky-900 text-white absolute right-0 top-7">
              Next Step
            </button>
          </div>
      </section>
    </div>
  )
}

export default Finishing