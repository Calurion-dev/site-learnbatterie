type StickingGridProps = {
  sticking: string[];
  counts?: string;
  label?: string;
};

function handFor(token: string): "right" | "left" | "both" {
  const hasRight = token.includes("R");
  const hasLeft = token.includes("L");
  if (hasRight && hasLeft) return "both";
  if (hasRight) return "right";
  if (hasLeft) return "left";
  return "both";
}

function readableToken(token: string): string {
  return token
    .replace("FR", "F")
    .replace("FL", "F")
    .replace("DR", "D")
    .replace("DL", "D")
    .replace("*", "•");
}

export function StickingGrid({ sticking, counts, label = "Séquence de sticking" }: StickingGridProps) {
  return (
    <div className="sticking-block">
      <div className="sticking-head">
        <span className="eyebrow">{label}</span>
        <div className="sticking-legend" aria-hidden="true">
          <span><i className="dot dot-right" /> droite</span>
          <span><i className="dot dot-left" /> gauche</span>
          <span><i className="dot dot-ornament" /> ornement</span>
        </div>
      </div>
      {counts ? <p className="sticking-counts">{counts}</p> : null}
      <ol className="sticking-row" aria-label={`Sticking : ${sticking.join(", ")}`}>
        {sticking.map((token, index) => {
          const hand = handFor(token);
          const ornament = token.startsWith("F") || token.startsWith("D");
          return (
            <li
              key={`${token}-${index}`}
              className={`sticking-token sticking-${hand}${ornament ? " sticking-ornament" : ""}`}
            >
              {readableToken(token)}
            </li>
          );
        })}
      </ol>
      <p className="sticking-help">
        R = main droite, L = main gauche, F = flam, D = drag, • = rebond.
      </p>
    </div>
  );
}
