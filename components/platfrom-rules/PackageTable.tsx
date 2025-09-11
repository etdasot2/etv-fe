import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useTranslation } from "react-i18next";

const packages = [
  { level: 0, name: "VIP0", price: 0, dailyViews: 6, earningsPerView: 0.5, deadline: 1 },
  { level: 1, name: "VIP1", price: 30, dailyViews: 3, earningsPerView: 0.5, deadline: 60 },
  { level: 2, name: "VIP2", price: 50, dailyViews: 5, earningsPerView: 0.5, deadline: 60 },
  { level: 3, name: "VIP3", price: 100, dailyViews: 5, earningsPerView: 1, deadline: 60 },
  { level: 4, name: "VIP4", price: 200, dailyViews: 10, earningsPerView: 1, deadline: 60 },
  { level: 5, name: "VIP5", price: 400, dailyViews: 20, earningsPerView: 1, deadline: 60 },
  { level: 6, name: "VIP6", price: 1200, dailyViews: 30, earningsPerView: 2, deadline: 60 },
  { level: 7, name: "VIP7", price: 3000, dailyViews: 30, earningsPerView: 5, deadline: 60 },
  { level: 8, name: "VIP8", price: 6000, dailyViews: 30, earningsPerView: 10, deadline: 60 },
  { level: 9, name: "VIP9", price: 10000, dailyViews: 50, earningsPerView: 10, deadline: 60 },
  { level: 10, name: "VIP10", price: 20000, dailyViews: 40, earningsPerView: 25, deadline: 60 },
]

export default function PackageTable() {
  const { t } = useTranslation();
  return (
    <div className="overflow-hidden rounded-lg border border-primary">

    <Table className="">
      <TableHeader  className="bg-primary rounded-t-sm ">
        <TableRow className="hover:bg-transparent text-center border border-primary">
          <TableHead className="w-1/2"></TableHead>
          <TableHead className="text-center font-sora text-[12px] text-white leading-[1]">{t('platformRules.packagesTable.price')}</TableHead>
          <TableHead className="text-center font-sora text-[12px] text-white leading-[1]">{t('platformRules.packagesTable.dailyReturn')}</TableHead>
          <TableHead className="text-center font-sora text-[12px] text-white leading-[1]">{t('platformRules.packagesTable.totalReturn')}</TableHead>
          <TableHead className="text-center font-sora text-[12px] text-white leading-[1] w-1/2">{t('platformRules.packagesTable.packageDuration')}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {packages.map((pkg) => (
          <TableRow key={pkg.level} className="hover:bg-transparent text-center border border-primary">
            <TableCell className="font-medium text-[13px] w-1/2">{pkg.name}</TableCell>
            <TableCell className="font-sora text-[13px]">{pkg.price}</TableCell>
            {/* <TableCell className="font-sora text-[13px]">{pkg.price === 0 ? t('global.free') : pkg.price}</TableCell> */}
            <TableCell className="font-sora text-[13px]">{(pkg.dailyViews * pkg.earningsPerView)}</TableCell>
            <TableCell className="font-sora text-[13px]">{(pkg.dailyViews * pkg.earningsPerView * pkg.deadline)}</TableCell>
            <TableCell className="font-sora text-[13px] w-[20%}">{pkg.deadline} {pkg.deadline <= 1 ? t('global.day') : t('global.days')}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>

  )
}

