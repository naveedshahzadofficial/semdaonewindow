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
        <span class="text-primary-dark font-semibold">Cutlery Sector</span>
      </h1>
    </div>
  </div>

  <div class="px-8 py-8 min-h-[500px]">
    <h1
      class="my-4 bg-gradient-to-r from-blue-600 to-green-400 rounded-md text-white py-2 px-2"
    >
      Sector Briefs
    </h1>
    <ul class="pb-4 list-disc ps-8">
      <li>
        <a
          href="https://smeda.org/phocadownload/Sectoral_Information/Light_Engineering/Cutlery%20Sector%20-%20Kitchenware%20Cutlery%202020.pdf"
          class="text-primary-dark hover:underline"
          >Kitchenware Cutlery [2020]</a
        >
      </li>
      <li>
        <a
          href="https://smeda.org/phocadownload/Sectoral_Information/Light_Engineering/Cutlery%20Sector%20-%20Non-Kitchenware%20Cutlery%202020.pdf"
          class="text-primary-dark hover:underline"
          >Non-Kitchenware Cutlery [2020]</a
        >
      </li>
      <li>
        <a
          href="https://smeda.org/phocadownload/Sectoral_Information/Light_Engineering/Cutlery%20Sector%20of%20Pakistan%202018.pdf"
          class="text-primary-dark hover:underline"
          >Cutlery Sector of Pakistan [2018]</a
        >
      </li>
    </ul>

    <h1
      class="mt-4 bg-gradient-to-r from-blue-600 to-green-400 rounded-t-md text-white py-2 px-2"
    >
      General Registrations/Licenses
    </h1>
    <table>
      <tbody>
        <tr>
          <td class="w-1/3">
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
            <p>For registering a partnership business</p>
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
            <p>For doing business as whole seller</p>
          </td>
        </tr>
        <tr>
          <td bgcolor="#ffffff">
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
            <p>Halal Certificate</p>
          </td>
          <td>
            <p>
              Pakistan National Accreditation Council (PNAC) is the authority
              responsible for implementation of regulations controlling Halal
              Certification in Pakistan
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Food business license/Registration</p>
          </td>
          <td>
            <p>
              Under Punjab Food Authority Act, 2011, if a food operator
              manufactures, sells, offers for sale, stores or distributes or
              imports any food without the prescribed registration or license,
              he shall be liable to imprisonment for a term which may extend to
              one year but which shall not be less than three days and fine
              which may extend to five hundred thousand rupees but which shall
              not be less than ten<br />
              thousand rupees.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Quality testing</p>
          </td>
          <td>
            <p>
              Sialkot Material Testing Laboratory (SIMTEL) provides quality
              testing facility in Sialkot
            </p>
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
      <li>
        <p>NOC For Building Plan Approval</p>
      </li>
      <li>
        <p>Permission of new tube well/ ejector pump</p>
      </li>
      <li>
        <p>Water connection</p>
      </li>
      <li>
        <p>NOC for right of way</p>
      </li>
      <li>
        <p>License for Installation of New Distillery Plant.</p>
      </li>
      <li>
        <p>NOC for Effluent Disposal</p>
      </li>
      <li>
        <p>NOC form Irrigation Department that site is not prone to flooding</p>
      </li>
      <li>
        <p>
          L-42-B License (Possession of rectified spirit for industrial purpose)
        </p>
      </li>
      <li>
        <p>Agreement for usage of irrigation water for industrial purposes</p>
      </li>
      <li>
        <p>Approval of conversion of land use</p>
      </li>
      <li>
        <p>Building Plan Approval</p>
      </li>
      <li>
        <p>
          L-42-B License (Possession of rectified spirit for educational,
          scientific purpose)
        </p>
      </li>
      <li>
        <p>Registration of boilers</p>
      </li>
      <li>
        <p>Registration of pressure vessels</p>
      </li>
      <li>
        <p>Verification of weighing/measuring instruments</p>
      </li>
      <li>
        <p>Confirmation of compliance</p>
      </li>
      <li>
        <p>Recommendations for import approval</p>
      </li>
      <li>
        <p>NOC of H.T Installations</p>
      </li>
      <li>
        <p>Verification of test reports of L.T Installation</p>
      </li>
      <li>
        <p>NOC for installation of streamers</p>
      </li>
      <li>
        <p>NOC for Installation of Billboards</p>
      </li>
      <li>
        <p>Plot Sub division Approval</p>
      </li>
      <li>
        <p>Building Plans Approval, LDA Housing Scheme</p>
      </li>
      <li>
        <p>Building Plans Approval, Controlled Area</p>
      </li>
      <li>
        <p>Land use- Permitted Commercial (List A Roads)</p>
      </li>
      <li>
        <p>Land Use - Permissible Commercial</p>
      </li>
      <li>Completion Certificate</li>
      <li>Annual Commercialization Renewal</li>
      <li>Revised / Addition / Alteration / Rebuild Building Plans Approval</li>
      <li>Conversion of land use</li>
      <li>Building plan approval</li>
      <li>Completion Certificate</li>
    </ul>
  </div>
</template>
