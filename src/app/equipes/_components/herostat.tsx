import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface TeamCardProps {
  team?: {
    victoire: number;
    defaite: number;
  };
}

export default function Herostat({ team }: TeamCardProps) {
  const router = useRouter();

  const handleVoteClick = () => {
    router.push("/billet"); // Redirection vers la page de billets
  };

  if (!team) {
    return (
      <div className="mt-25 h-7 text-center text-red-500 font-medium">
        Aucune donnée d’équipe disponible
      </div>
    );
  }

  return (
    <div className="mt-25 h-auto">
      {/* Desktop */}
      <div className="hidden md:flex justify-center gap-10 h-[120px]">
        <div className="space-y-5">
          <h1 className="text-3xl ">Victoire</h1>
          <p className="text-4xl font-medium">{team.victoire}</p>
        </div>
        <Separator
          orientation="vertical"
          className="h-8 bg-white border -mx-2"
        />
        <div className="space-y-5">
          <h1 className="text-3xl ">Défaite</h1>
          <p className="text-4xl font-medium">{team.defaite}</p>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col items-center gap-4 md:hidden">
        <div className="flex justify-center gap-6">
          <div className="space-y-2">
            <h1 className="text-xl">Victoire</h1>
            <p className="text-2xl font-medium">{team.victoire}</p>
          </div>
          <Separator
            orientation="vertical"
            className="h-6 bg-white border -mx-1"
          />
          <div className="space-y-2">
            <h1 className="text-xl">Défaite</h1>
            <p className="text-2xl font-medium">{team.defaite}</p>
          </div>
        </div>
      </div>

      {/* Bouton */}
      <Button
        onClick={handleVoteClick}
        className="bg-gradient-to-r from-[#EF8624] to-[#FFB347] text-base py-3 mt-6 w-full md:w-auto text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
      >
        Vos billets
      </Button>
    </div>
  );
}
