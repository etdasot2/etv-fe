import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useTranslation } from "react-i18next"



export default function CommissionTable() {
    const { t } = useTranslation();
    const packages = [
        { name: t('platformRules.commissionTable.generation')+" 1", purcahseCommission: 15, dailyTaskCommission: 9, requiredLevel: 1 },
        { name: t('platformRules.commissionTable.generation')+" 2", purcahseCommission: 9, dailyTaskCommission: 7, requiredLevel: 2 },
        { name: t('platformRules.commissionTable.generation')+" 3", purcahseCommission: 6, dailyTaskCommission: 4, requiredLevel: 3 },
        { name: t('platformRules.commissionTable.generation')+" 4", purcahseCommission: 3, dailyTaskCommission: 1, requiredLevel: 4 },
        { name: t('platformRules.commissionTable.generation')+" 5", purcahseCommission: 2, dailyTaskCommission: 1, requiredLevel: 5 },
       ]

  return (
    <div className="overflow-hidden rounded-lg border border-secondary">

    <Table className="">
      <TableHeader  className="bg-secondary rounded-t-sm ">
        <TableRow className="hover:bg-transparent text-center border border-secondary">
          <TableHead className="w-1/2"></TableHead>
          <TableHead className="text-center font-sora text-[12px] text-black leading-[1]">{t('platformRules.commissionTable.purchaseCommission')}</TableHead>
          <TableHead className="text-center font-sora text-[12px] text-black leading-[1]">{t('platformRules.commissionTable.dailyTaskCommission')}</TableHead> 
          <TableHead className="text-center font-sora text-[12px] text-black leading-[1]">{t('platformRules.commissionTable.requiredLevel')}</TableHead> 
        </TableRow>
      </TableHeader>
      <TableBody>
        {packages.map((pkg) => (
          <TableRow key={pkg.requiredLevel} className="hover:bg-transparent text-center border border-secondary overflow-hidden">
            <TableCell className="font-medium text-[13px] leading-[1]">{pkg.name}</TableCell>
            <TableCell className="font-sora text-[13px]">{pkg.purcahseCommission}%</TableCell>
            <TableCell className="font-sora text-[13px]">{pkg.dailyTaskCommission}%</TableCell> 
            <TableCell className="font-sora text-[13px] leading-[1]"><span className="font-semibold">VIP{pkg.requiredLevel}</span><br/> <span className="text-[11px]">{t('platformRules.commissionTable.orHigher')}</span></TableCell> 
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>

  )
}

