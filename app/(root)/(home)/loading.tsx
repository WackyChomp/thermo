import { Skeleton } from "@/components/ui/skeleton"

type Props = {}

const loading = (props: Props) => {
  return (
    <main className="flex-center flex-col paddings mx-auto w-full max-w-screen-2xl">    
      <section className="nav-padding w-full">
        <Skeleton className="w-[100px] h-[20px] rounded-full bg-blue-600" />
      </section>

      <section className="mt-6 flex flex-col w-full sm:mt-20">
        <Skeleton className="h-10 w-56"/>
        <div className="mt-12 flex flex-wrap w-full justify-center gap-16 sm:justify-start">
          <Skeleton className="h-[440px] w-56"/>
        </div>
      </section>
    </main>
  )
}

export default loading