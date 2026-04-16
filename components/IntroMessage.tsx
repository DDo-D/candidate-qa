import CandidateAvatar from "./CandidateAvatar";

export default function IntroMessage() {
  return (
    <div className="mx-6 flex items-start gap-3 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3">
      <div className="pt-px">
        <CandidateAvatar />
      </div>
      <p className="flex-1 text-xs text-zinc-500 leading-relaxed">
        이 인터페이스는 신종목(KAVA 인턴십 심사역 트랙 지원자)에 대한
        사실 확인용 검토 도구입니다. 모든 응답은 후보자가 직접 제공한
        자료에만 기반하며, 독립적 검증을 거치지 않았습니다.
      </p>
    </div>
  );
}
