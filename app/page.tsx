"use client"; // Adicione esta linha

import React from "react";

export default function Page() {
  const WHATSAPP_LINK = "https://wa.me/5511982100301?text=Quero%20um%20diagn%C3%B3stico%20para%20BPO%20de%20Vendas%20%26%20Relacionamento";

  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top Bar */}
      <header className="print:hidden sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-neutral-900 text-white flex items-center justify-center font-bold">BPO</div>
            <span className="font-semibold tracking-tight">Vendas & Relacionamento <br/> — Moveleiro Premium</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#o-que-fazemos" className="hover:text-neutral-600">O que fazemos</a>
            <a href="#para-quem" className="hover:text-neutral-600">Para quem</a>
            <a href="#planos" className="hover:text-neutral-600">Planos</a>
            <a href="#governanca" className="hover:text-neutral-600">Governança</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm shadow-sm hover:bg-neutral-800">
              Fale com especialista
            </a>
            <button onClick={handlePrint} className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-100">
              Baixar One‑Pager (PDF)
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="print:hidden relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-neutral-100" />
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-10 md:pt-24 md:pb-16 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
                Assuma o controle da sua <span className="underline decoration-neutral-900 decoration-4 underline-offset-4">receita</span>.
              </h1>
              <p className="mt-5 text-neutral-700 text-lg leading-relaxed">
                BPO completo de Vendas & Relacionamento para marcenarias e lojas de móveis sob medida, colchões e estofados que exigem performance. 
                <strong> Colocamos clientes prontos para comprar na sua agenda</strong>, com qualificação humana e acompanhamento que aumenta LTV e recompra.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a href={WHATSAPP_LINK} className="inline-flex justify-center rounded-2xl bg-neutral-900 text-white px-6 py-3 text-base font-medium shadow hover:bg-neutral-800">
                  Diagnóstico executivo (20 min)
                </a>
                <button onClick={handlePrint} className="inline-flex justify-center rounded-2xl bg-white border border-neutral-300 px-6 py-3 text-base font-medium hover:bg-neutral-100">
                  Baixar One‑Pager
                </button>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-neutral-600">
                <div className="p-3 rounded-xl bg-white border border-neutral-200">Leads validados</div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">SLA & Relatórios</div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">Agendamento por SDR</div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">Exclusividade regional*</div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="text-sm text-neutral-600">Snapshot de desempenho (exemplo)</div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <Metric label="QL/mês" value="65" note="Growth" />
                  <Metric label="Agendamentos" value="42%" note="sobre QL" />
                  <Metric label="Fechamento" value="21%" note="sobre agendas" />
                  <Metric label="Payback" value="30–60d" note="com SLA" />
                </div>
                <p className="mt-5 text-xs text-neutral-500">*Dados ilustrativos; o desempenho depende de praça, ticket, mix e cumprimento de SLA.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section id="o-que-fazemos" className="print:hidden py-14 border-t border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">O que entregamos</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <Card title="Aquisição & Qualificação humana">
              Mídia, páginas e filtros. Validamos intenção, prazo (≤ 60 dias para móveis) e faixa de investimento. Sem “curioso”.
            </Card>
            <Card title="Agendamento com contexto">
              Oportunidades chegam com briefing: ambiente, cidade, prazo, budget e evidência visual quando disponível.
            </Card>
            <Card title="Acompanhamento ativo & Pós‑venda">
              Sequências de contato, remarcação de no‑shows e campanhas de fidelização para aumentar LTV e recompra.
            </Card>
            <Card title="Governança comercial">
              Playbooks, scripts, SLAs, dashboards e revisão de chamadas para elevar a taxa de fechamento.
            </Card>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section id="para-quem" className="print:hidden py-14 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Para quem é</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <BadgeList title="Perfil mínimo">
              <li>Faturamento ≥ R$100k/mês</li>
              <li>Portfólio comprovado</li>
              <li>Capacidade produtiva</li>
            </BadgeList>
            <BadgeList title="Investimento">
              <li>Planos de R$4k a R$15k/mês</li>
              <li>Exclusividade por sub‑região (ELITE)</li>
              <li>Substituição de leads inválidos</li>
            </BadgeList>
            <BadgeList title="Compromissos (SLA)">
              <li>Responder em até 10 minutos</li>
              <li>3 tentativas/24h no D0</li>
              <li>Follow‑ups D1, D3, D7, D14</li>
            </BadgeList>
          </div>
        </div>
      </section>

      {/* Por que funciona */}
      <section className="print:hidden py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Por que funciona</h2>
          <ul className="mt-6 grid md:grid-cols-2 gap-6 list-disc pl-5 text-neutral-700">
            <li><strong>Leads validados de verdade</strong>: intenção, prazo e budget compatíveis.</li>
            <li><strong>Acompanhamento ativo</strong>: reduz no‑show e acelera decisão.</li>
            <li><strong>Proteção de território</strong>: foco e profundidade na sua praça.</li>
            <li><strong>Relatórios que importam</strong>: CAC, funil, taxa de ganho e ROI.</li>
          </ul>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="print:hidden py-14 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Modelos de parceria</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <PlanCard tier="Start" price="R$ 4.000/mês" bullets={["25–35 QLs/mês", "Substituição até 15%", "Relatórios semanais"]} />
            <PlanCard tier="Growth" price="R$ 8.000/mês" bullets={["45–65 QLs/mês", "SDR agenda para você", "Treino de atendimento", "Substituição 20%", "Território limitado"]} highlight />
            <PlanCard tier="Elite" price="R$ 15.000/mês" bullets={["70–100 QLs/mês", "Exclusividade por sub‑região", "LP/VSL dedicadas", "Acompanhamento diário", "Substituição 25%"]} />
          </div>
          <p className="mt-4 text-xs text-neutral-500">*QL = Oportunidade qualificada. Valores e volumes variam por praça, ticket, mix e sazonalidade.</p>
        </div>
      </section>

      {/* Governança */}
      <section id="governanca" className="print:hidden py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Governança & Compliance</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Card title="LGPD‑first">
              Consentimento, finalidade clara (contato comercial), opt‑out e guarda de logs. Acesso restrito a dados.
            </Card>
            <Card title="Contrato transparente">
              Escopo, metas de volume, critérios de QL, SLA, política de substituição e exclusividade por sub‑região.
            </Card>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="print:hidden py-16 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Pronto para previsibilidade comercial?</h3>
          <p className="mt-3 text-neutral-300">Agende um diagnóstico executivo de 20 minutos e receba uma proposta com metas de volume para a sua região.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={WHATSAPP_LINK} className="inline-flex justify-center rounded-2xl bg-white text-neutral-900 px-6 py-3 font-medium hover:bg-neutral-100">Falar no WhatsApp</a>
            <button onClick={handlePrint} className="inline-flex justify-center rounded-2xl border border-white/30 px-6 py-3 font-medium hover:bg-white/10">Baixar One‑Pager</button>
          </div>
        </div>
      </section>

      <footer className="print:hidden border-t border-neutral-200 py-8 text-sm text-neutral-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} BPO Moveleiro. Todos os direitos reservados.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-700">Política de Privacidade</a>
            <a href="#" className="hover:text-neutral-700">Termos de Uso</a>
          </div>
        </div>
      </footer>

      {/* ONE-PAGER (apenas para impressão) */}
      <section className="hidden print:block p-10 text-neutral-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold">BPO de Vendas & Relacionamento — Setor Moveleiro</div>
            <div className="text-sm">Contato: {WHATSAPP_LINK}</div>
          </div>
          <hr className="my-4 border-neutral-300" />

          <h2 className="text-xl font-semibold">Proposta de Valor</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Assumimos o front comercial e o pós‑venda para empresas moveleiras (móveis sob medida, colchões e estofados) que buscam previsibilidade de receita. 
            Entregamos <strong>oportunidades qualificadas</strong>, agendamento com contexto e <strong>programas de relacionamento</strong> que aumentam LTV e recompra.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-4 text-sm">
            <div>
              <h3 className="font-semibold">Entregáveis</h3>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Aquisição & Qualificação humana (SDR)</li>
                <li>Agendamento com briefing (ambiente, prazo, budget)</li>
                <li>Sequências de follow‑up e remarcação</li>
                <li>Campanhas de fidelização e LTV</li>
                <li>Playbooks, SLAs, dashboards e call‑review</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Critérios & Proteções</h3>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Lead qualificado: intenção, prazo (≤ 60d móveis) e budget compatível</li>
                <li>Substituição de leads inválidos conforme política</li>
                <li>Exclusividade por sub‑região (ELITE)</li>
                <li>LGPD-first: consentimento, finalidade e opt‑out</li>
                <li>SLA do parceiro: resposta em 10 min + tentativas D0/D1/D3/D7/D14</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
            <div className="border border-neutral-300 rounded-lg p-3">
              <div className="font-semibold">Start — R$ 4.000/mês</div>
              <div className="text-xs text-neutral-600">25–35 QLs/mês · Subst. 15% · Relatórios semanais</div>
            </div>
            <div className="border border-neutral-300 rounded-lg p-3">
              <div className="font-semibold">Growth — R$ 8.000/mês</div>
              <div className="text-xs text-neutral-600">45–65 QLs/mês · SDR agenda · Treino · Subst. 20%</div>
            </div>
            <div className="border border-neutral-300 rounded-lg p-3">
              <div className="font-semibold">Elite — R$ 15.000/mês</div>
              <div className="text-xs text-neutral-600">70–100 QLs/mês · Exclusividade · LP/VSL · Subst. 25%</div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold">Indicadores‑chave</h3>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Qualificação ≥ 70% | Agendamento ≥ 40%</li>
                <li>Fechamento móveis 12–25% | colchões 20–35%</li>
                <li>Payback alvo: 30–60 dias (com SLA)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Próximos passos</h3>
              <ol className="list-decimal pl-5 mt-1 space-y-1">
                <li>Diagnóstico de 20 minutos</li>
                <li>Proposta com metas de volume por região</li>
                <li>Onboarding (scripts, CRM, sequências)</li>
              </ol>
            </div>
          </div>

          <hr className="my-4 border-neutral-300" />
          <div className="text-sm">© {new Date().getFullYear()} BPO Moveleiro — Confidencial. Uso exclusivo do destinatário.</div>
        </div>
      </section>
    </div>
  );
}

function Metric({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="p-4 rounded-xl border border-neutral-200">
      <div className="text-neutral-500 text-xs uppercase tracking-wide">{label}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      {note && <div className="text-xs text-neutral-500 mt-1">{note}</div>}
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="font-semibold">{title}</div>
      <p className="mt-2 text-neutral-700 leading-relaxed">{children}</p>
    </div>
  );
}

function BadgeList({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="font-semibold mb-2">{title}</div>
      <ul className="space-y-1 text-neutral-700">{children}</ul>
    </div>
  );
}

function PlanCard({ tier, price, bullets, highlight }: { tier: string; price: string; bullets: string[]; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl border ${highlight ? "border-neutral-900" : "border-neutral-200"} bg-white p-6 shadow-sm relative`}>
      {highlight && (
        <div className="absolute -top-3 right-4 bg-neutral-900 text-white text-xs px-2 py-1 rounded-md">Mais escolhido</div>
      )}
      <div className="text-lg font-semibold">{tier}</div>
      <div className="mt-1 text-neutral-600">{price}</div>
      <ul className="mt-4 space-y-2 text-neutral-700 text-sm">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span>•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="mt-5 inline-flex justify-center w-full rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800">Solicitar proposta</a>
    </div>
  );
}
