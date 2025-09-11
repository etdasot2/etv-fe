import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useTranslation } from "react-i18next";



export default function PackageTable() {
  const { t } = useTranslation();

  const packages = [
    { title: t('platformRules.salariesTable.roles.leader1'), teamSize: 15, newMemberReward: 2, promotionBonus: 30 }, 
    { title: t('platformRules.salariesTable.roles.leader2'), teamSize: 30, newMemberReward: 3, promotionBonus: 50 }, 
    { title: t('platformRules.salariesTable.roles.leader3'), teamSize: 60, newMemberReward: 4, promotionBonus: 100 }, 
    { title: t('platformRules.salariesTable.roles.leader4'), teamSize: 120, newMemberReward: 6, promotionBonus: 500 }, 
    { title: t('platformRules.salariesTable.roles.leader5'), teamSize: 250, newMemberReward: 8, promotionBonus: 1000 }, 
    { title: t('platformRules.salariesTable.roles.leader6'), teamSize: 500, newMemberReward: 12, promotionBonus: 2000, plus:true },
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-primary">

    <Table className="">
      <TableHeader  className="bg-primary rounded-t-sm ">
        <TableRow className="hover:bg-transparent text-center border border-primary">
          <TableHead className="text-center font-sora text-[12px] text-white leading-[1]"></TableHead>
          <TableHead className="text-center font-sora text-[12px] text-white leading-[1]">{t('platformRules.salariesTable.teamSize')}</TableHead>
          <TableHead className="text-center font-sora text-[12px] text-white leading-[1]">{t('platformRules.salariesTable.newAddedMemberReward')}</TableHead>
          <TableHead className="text-center font-sora text-[12px] text-white leading-[1]">{t('platformRules.salariesTable.promotionBonus')}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {packages.map((pkg) => (
          <TableRow key={pkg.teamSize} className="hover:bg-transparent text-center border border-primary">
            <TableCell className="font-sora text-[13px] leading-[1]">{pkg.title}</TableCell>
            <TableCell className="font-sora text-[13px]">{pkg.teamSize}{pkg.plus && '+'}</TableCell>
            <TableCell className="font-sora text-[13px]">{pkg.newMemberReward}USDT</TableCell>
            <TableCell className="font-sora text-[13px] leading-[1]">{pkg.promotionBonus !== 0 ? `${pkg.promotionBonus}USDT` : 'Not Avaliable'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>

  )
}

