interface Props {
  lastUpdated: string;
}

export default function DisclosureBanner({ lastUpdated }: Props) {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-amber-200 bg-amber-50 px-6 py-2 flex items-center justify-between gap-4">
      <p className="text-xs text-amber-700 leading-relaxed">
        이 인터페이스의 모든 정보는 후보자가 직접 제공한 자료에 기반합니다.
        외부 검증이 완료된 정보가 아닙니다.
      </p>
      <p className="text-xs text-amber-500 shrink-0">
        최종 업데이트: {lastUpdated}
      </p>
    </div>
  );
}
