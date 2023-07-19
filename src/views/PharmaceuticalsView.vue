<script setup>
import { onMounted } from "vue";
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<style lang="scss">
tr:nth-child(even) {
  background-color: #f2f2f2; /* Set the background color for even rows */
}

tr:nth-child(odd) {
  background-color: #ffffff; /* Set the background color for odd rows */
}
td {
  @apply px-2 py-2;
  border: 1px solid #ccc; /* Add border to each td */
  padding: 8px; /* Add padding to each td */
}
</style>
<template>
  <div class="flex justify-between">
    <div class="-mx-6">
      <h1 class="flex items-center">
        <span
          ><img
            src="@/assets/images/heading-left.png"
            alt="heading-icon"
          />
        </span>
        <span class="text-primary-dark font-semibold"
          >Pharmaceutical Sector</span
        >
      </h1>
    </div>

    <div class="mx-8">
      <a
        href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=145:health-and-medical&Itemid=308"
        target="_blank"
        class="font-normal px-2 py-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white mr-2"
        >Pre-Feasibility Reports</a
      >
      <a
        href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=28&Itemid=139"
        target="_blank"
        class="font-normal px-2 py-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white"
        >Sector Brief</a
      >
    </div>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <table>
      <thead>
        <tr>
          <th
            class="border border-slate-300 py-4 bg-gradient-to-r from-blue-600 to-green-300 text-white font-medium text-lg"
            colspan="2"
          >
            General Registrations/Licenses
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>Registration of trade mark/Copy right</p>
          </td>
          <td>
            <p>
              Legally registration is not mandatory but required for claiming
              any right in the court and for import or export purposes as per
              requirement of counterpart.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Registration of partnership</p>
          </td>
          <td>
            <p>For registered partnership business</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Registration of Company</p>
          </td>
          <td>
            <p>For doing business as company</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>NTN/Registration with SMEDA</p>
          </td>
          <td>
            <p>
              For tax purpose, claiming concessions/exemptions, import/export
              registration etc.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Registration for payment of tax on services</p>
          </td>
          <td>
            <p>In case taxable services involved</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Professional Tax registration</p>
          </td>
          <td>
            <p>For payment of professional tax</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>L-17 License (Retail sale)</p>
          </td>
          <td>
            <p>For doing retail business</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>L-17 License (Whole-Sale)</p>
          </td>
          <td>
            <p>For doing business as wholesaler</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Environmental Approval - EIA &amp; IEE</p>
          </td>
          <td>
            <p>
              Environmental Impact Assessment (EIA) / Initial Environmental
              Examination (IEE) Directorate plays a major role in implementing
              the Pakistan Environment Protection Act (PEPA) -1997 specifically
              Section-12 and Review of IEE/EIA Regulations 2000.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>PESSI Registration</p>
          </td>
          <td>
            <p>
              It is mandatory for an establishment having 5 or more employees,
              to register with PESSI under the Sub-Section (3) of Section 1 of
              the Provincial Employees Social Security Ordinance, 1965.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Shops &amp; Establishment Registration</p>
          </td>
          <td>
            <p>
              Punjab Shops and Establishments Ordinance, 1969 is applicable on
              commercial establishments, industrial establishments and
              factories. The rule made under the Ordinance makes every employer
              to maintain certain records and registers.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Registration of Factories</p>
          </td>
          <td>
            <p>
              Under the Factories Act 1934, registration of any premises,
              including the precincts thereof, wherein ten or more workers are
              working, or were working on any day of the preceding twelve
              months, and in any part of which a manufacturing process is being
              carried on, or is ordinarily carried on with or without the aid of
              power, but does not include a mine, subject to the operation of
              the Mines Act, 1923 (IV of 1923) is required.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Patent and Design Registration</p>
          </td>
          <td>
            <p>
              To claim any right under Patent and Design law, registration is
              required under the Patent Ordinance, 2000 and the Registered
              Design Ordinance, 2000.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Registration with National Council for Tib</p>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <p>Registration with National Council for Homeopathy</p>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <p>Registration with Pakistan Veterinary Medical Council</p>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <p>Drug Sale License pharmacist/medical store</p>
          </td>
          <td>
            <p>
              A person may apply to the licensing authority for the grant or
              renewal of a license under Drug Rules 1976.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>License for import of Drugs</p>
          </td>
          <td>
            <p>
              A license to import drugs other than finished drugs shall be
              issued in Form 5 and for the import of a small quantity of drugs
              for clinical trial, examination, test, or analysis shall be issued
              in Form 6 under the Drug Act, 1976
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Registration of Pesticide Distributors</p>
          </td>
          <td>
            <p>Managed under the Punjab Agriculture Pesticide Rules, 2018</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h1
      class="my-4 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white py-2 px-2"
    >
      Sector Based Requirements
    </h1>
    <ul class="pb-4 list-disc ps-8">
      <li>NOC For Building Plan Approval</li>
      <li>Permission of new tube well/ ejector pump</li>
      <li>Water connection</li>
      <li>NOC for right of way</li>
      <li>License for Installation of New Distillery Plant.</li>
      <li>NOC for Effluent Disposal</li>
      <li>NOC form Irrigation Department that site is not prone to flooding</li>
      <li>
        L-42-B License (Possession of rectified spirit for industrial purpose)
      </li>
      <li>Agreement for usage of irrigation water for industrial purposes</li>
      <li>Approval of conversion of land use</li>
      <li>Building Plan Approval</li>
      <li>
        L-42-B License (Possession of rectified spirit for educational,
        scientific purpose)
      </li>
      <li>Registration of boilers</li>
      <li>Registration of pressure vessels</li>
      <li>Verification of weighing/measuring instruments</li>
      <li>Confirmation of compliance</li>
      <li>Recommendations for import approval</li>
      <li>NOC of H.T Installations</li>
      <li>Verification of test reports of L.T Installation</li>
      <li>NOC for installation of streamers</li>
      <li>NOC for Installation of Billboards</li>
      <li>Plot Sub division Approval</li>
      <li>Building Plans Approval, LDA Housing Scheme</li>
      <li>Building Plans Approval, Controlled Area</li>
      <li>Land use- Permitted Commercial (List A Roads)</li>
      <li>Land Use - Permissible Commercial</li>
      <li>Completion Certificate</li>
      <li>Annual Commercialization Renewal</li>
      <li>Revised / Addition / Alteration / Rebuild Building Plans Approval</li>
      <li>Conversion of land use</li>
      <li>Building plan approval</li>
      <li>Completion Certificate</li>
    </ul>
  </div>
</template>
