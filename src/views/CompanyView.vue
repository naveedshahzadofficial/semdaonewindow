<script setup>
import {onMounted, defineEmits} from "vue";

const emit = defineEmits(["breadcrumbs", "background"]);
onMounted(() => {
  window.scrollTo(0, 0);
  emit("background", require("@/assets/images/bg-dashboard.jpg"));
  emit("breadcrumbs", [
    {title: "Home", link: "dashboard"},
    {title: "Start", link: "start"},
    {title: "Company", link: ""},
  ]);
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
.abc {
  position: relative;
  padding: 6px 0px 7px 0px;
  margin: 13px 0px 18px;
}
.abc::after {
  content: '';
  height: 19px;
  width: 100%;
  left: 0px;
  position: absolute;
  background-position: 0 0;
  bottom: 5px;
  border-bottom: 2px solid #0064e9;
}
</style>
<template>
  <section class="px-4 py-8">
    <div class="flex justify-between">
      <div class="-mx-6">
        <h1
            class="flex items-center space-x-2 bg-[url('@/assets/images/Patti.png')] bg-cover bg-no-repeat w-[250px]"
        >
          <span class="text-white font-semibold ml-8">Company</span>
        </h1>
      </div>
    </div>

    <div class="px-8 py-8 min-h-[500px]">
      <div class="pt-4">
        <h1 class="flex items-center my-4 py-2 abc w-[640px]">
          <img src="@/assets/images/heading-line.png" class="h-[25px]" >
          <span class="text-primary-dark font-semibold  pl-2">Step wise Requirements for Registration of a New Company are as under:</span>
        </h1>
        <span class="font-normal"> Any person desirous of forming a company shall have the options to file the application either:- </span>
        <ul class="pb-4 pt-4 list-disc ps-8 normal-case">
          <li>Physical application as per Companies (Incorporation) Regulations, 2017 or;</li>
          <li>Online application through e-service available at
            <a href="https://eservices.secp.gov.pk/eServices" class="text-primary-dark hover:underline">https://eservices.secp.gov.pk/eServices </a>
          </li>
        </ul>
        <span class="px-0">
      <span class="font-normal">The first step with regard to incorporation of a company (either online or in physical form) is to seek the
        availability of the proposed company name from the registrar.</span></span>
      </div>

      <h1 class="flex my-4 py-2 abc w-[520px]">
        <img src="@/assets/images/heading-line.png" class="h-[25px]" >
        <span class="text-primary-dark font-semibold pl-2">Physical Submission of application for Name Availability</span>
      </h1>
      <span class="font-normal "> Stepwise procedure for physical submission of application is as follows: </span>
      <ul class="pb-4 list-disc ps-8 pt-4 normal-case">
        <li>Download and fill the Inc-Form-1.
          <a href="https://www.secp.gov.pk/company-formation/formsapplications-schedule-of-filling-of-returns/applications/"
             class="text-primary-dark hover:underline">https://www.secp.gov.pk/company-formation/formsapplications-schedule-of-filling-of-returns/applications/</a>
        </li>
        <li>Submit the Inc-Form-1 with the registrar at any of our Company Registration Offices, located at nine
          different cities
          <a href="https://www.secp.gov.pk/contact-us/" class="text-primary-dark hover:underline">https://www.secp.gov.pk/contact-us/ </a>
        </li>
      </ul>
      <span class="font-normal">The registrar, if satisfied shall issue name availability letter and reserve the name for a period of sixty
days from the date of issuance of the name availability letter. </span><br><br>
      <span class="font-normal">The applicant after obtaining name availability letter can apply for incorporation of a company. For ease
of reference you may visit Companies (incorporation) regulations, 2017 available at
        <a href="https://www.secp.gov.pk/laws/regulations" class="text-primary-dark hover:underline">https://www.secp.gov.pk/laws/regulations</a>
</span>


      <h1 class="flex items-center my-4 py-2 abc w-[790px]">
        <img src="@/assets/images/heading-line.png" class="h-[25px]" >
        <span class="text-primary-dark font-semibold pl-2">Online submission of application for Name Availability and Incorporation of the Company </span>
      </h1>
      <span class="font-normal mt-4 mb-4"> Stepwise procedure for online submission of application is as follows:-</span>
      <ul class="pb-4 list-none ps-8 normal-case">
        <li>
          <h1 class="flex  my-4 py-2">
            <span class="text-primary-dark font-semibold">USER Registration</span>
          </h1>
          <span class="font-normal">Before processing online application for seeking name availability and incorporation, Personal
    Identification Number (PIN) is required to be obtained for registration of user through following
    procedure:-</span>
          <ul class="pt-4 list-disc ps-8 mb-4 normal-case">
            <li>Click
              <a href="https://eservices.secp.gov.pk/eServices/" class="text-primary-dark hover:underline">https://eservices.secp.gov.pk/eServices/</a>
            </li>
            <li>Click Sign up for National or Foreign/POC holder for the new user.</li>
            <li>Fill the form by providing the required information.</li>
          </ul>
          <span class="font-normal">Upon successful completion of the form, user will receive a 4 digits PIN code on the provided
    email address and cell phone number. The PIN code received by the user shall be used to
    electronically sign the processes/forms.  </span><br><br>
          <span class="font-normal">Note 1: - Please also note that the CNIC/passport number and password provided at the time of
    signup will be the user ID and the password for subsequent use.
    </span><br><br>
          <span class="font-normal">Note 2: - If a company is having more than one subscriber, then each subscriber shall create his
    separate User ID and password in the same manner for digitally signing the incorporation form. </span>
        </li>
        <li>
          <h1 class="flex  my-4 py-2">
            <span class="text-primary-dark font-semibold">Login to eServices</span>
          </h1>
          <ul class="pb-4 list-disc ps-8 normal-case">
            <li>After obtaining PIN, Click
              <a href="https://eservices.secp.gov.pk/eServices/" class="text-primary-dark hover:underline">https://eservices.secp.gov.pk/eServices/</a>
            </li>
            <li>Login by entering CNIC and password.</li>
            <li>Following list of available processes will appear</li>
            <ul class="pb-4 list-disc ps-8 normal-case">
              <li>Company Name Reservation</li>
              <li>Name reservation and incorporation (combined)</li>
              <li>LLP Name reservation</li>
              <li>Name reservation and incorporation LLP. </li>
            </ul>
          </ul>
          <span class="font-normal">Note: <small>User can choose the option for name reservation and incorporation (combined process) wherein process for
    name reservation and incorporation can simultaneously be submitted. However, this facility is not available to the
            foreign companies and the companies where prior approval of the Commission/Other authority is required </small></span>
        </li>
      </ul>

      <h1 class="flex items-center my-4 py-2 abc w-[430px]">
        <img src="@/assets/images/heading-line.png" class="h-[25px]" >
        <span class="text-primary-dark font-semibold pl-2">Name Reservation and Company Incorporation</span>
      </h1>
      <ul class="pb-4 list-none ps-8 normal-case">
        <li>
          <h1 class="flex my-4 py-2">
            <span class="text-primary-dark font-semibold">1. Application and fee payment details:</span>
          </h1>
          <span class="font-normal">For name reservation or name reservation and incorporation (combined), in data input
page, provide three proposed names of company, its significance along with company kind
and principal line of business in drop down menu. Select the desired kind of company and
ensure that the information is correctly entered.</span>
          <br>
          <br>
          <span class="font-normal mb-4">Select the mode of payment from the drop down option to make payment through:</span>
          <br>
          <br>
          <ul class="pb-4 list-disc ps-8 normal-case">
            <li>bank challan</li>
            <li>credit card</li>
            <li>ADC ePayment (1link member banks, easy paisa, mobile banking, ATM and internet
              banking)
            </li>
          </ul>
          <span>
            In case you choose “bank challan”, then click on “locate bank”, select “bank name”, enter
“city name”, click “search button” and select the bank branch from the available branches
of MCB Bank Limited or United Bank Limited.
          </span>
        </li>
        <li>
          <h1 class="flex my-4 py-2">
            <span class="text-primary-dark font-semibold">2. Company information:</span>
          </h1>
          <span class="">In this section enter company information such as registered office/correspondence
address, telephone number, email address and principal line of business.</span>
        </li>
        <li>
          <h1 class="flex my-4 py-2">
            <span class="text-primary-dark font-semibold">3. Authorized & Paid up Capital:</span>
          </h1>
          <span class="">Authorized capital means such capital as is authorized by the memorandum of the company to be
the maximum amount of share capital of the company. A company cannot raise more capital than
authorized by its memorandum. A company can be registered with the minimum authorized capital
of Rs. 100,000 (on which minimum fee shall be charged). <br><br>
Paid up capital means an amount of capital which is actually taken up by the members and
subscribers of the company. </span>
        </li>
        <li>
          <h1 class="flex my-4 py-2">
            <span class="text-primary-dark font-semibold">4. Subscriber / Director/ chief executive details:</span>
          </h1>
          <span class="font-normal">Enter the particulars of subscribers, directors, chief executive in this section, to create and
remove rows in the data entry form “add” and “remove” buttons have been provided in the
system.
 </span>
        </li>
        <li>
          <h1 class="flex my-4 py-2">
            <span class="text-primary-dark font-semibold">5. Applicant/ Declarant Details:</span>
          </h1>
          <span class="font-normal">In this section enter name, address, telephone number, email address, CNIC/passport
number of signatory.</span>
        </li>
        <li>
          <h1 class="flex my-4 py-2">
            <span class="text-primary-dark font-semibold">6. Press Continue Button:</span>
          </h1>
          <span class="">After entering the data provided at serial number (i) to (vi) above and by pressing continue
button, process document listing page will be displayed containing the following
hyperlinks:</span>
          <ul class="pb-4 list-none ps-8 normal-case">
            <li>
              <h1 class="flex my-4 py-2">
                <span class="text-primary-dark font-semibold">a. <span class="">Update Form(s) Data:</span></span>
              </h1>
              <span>Applicant can edit/update the already entered data by clicking this link.</span>
            </li>
            <li>
              <h1 class="flex my-4 py-2">
                <span class="text-primary-dark font-semibold">b. <span class="">View Forms:</span></span>
              </h1>
              <span>Applicant can review the form generated automatically by using this link. It is pertinent
to mention that this page is not editable and only available for review. </span>
            </li>
            <li>
              <h1 class="flex my-4 py-2">
                <span class="text-primary-dark font-semibold">c. <span class="">Information for Third Parties:</span></span>
              </h1>
              <span>It is a mandatory requirement to provide officer additional information such as name of
subscriber/director, personal address, country etc. by clicking this link for generation of
National Tax Numbers (NTN) of company and its subscriber/directors. You may opt to
register your company with (Employees Old age Benefits Institution (EOBI), Punjab
Employee Social Security Institution (PESSI)/ Sindh Employee Social Security Institution
(SESSI), Labor Department and Excise and Taxation Department of the Province of Punjab
and Sindh through eService by providing additional information while submitting your
incorporation application.
 </span>
            </li>
            <li>
              <h1 class="flex my-4 py-2">
                <span class="text-primary-dark font-semibold">d. <span class="">Fill New Attachment and incorporation Form:</span></span>
              </h1>
              <span>By clicking this link, applicant can attach the documents in PDF format such as copy
of CNIC, name availability letter, etc. (in case of combined incorporation process,
separate attachment of name availability letter is not required).
 </span>
            </li>
            <li>
              <h1 class="flex my-4 py-2">
                <span class="text-primary-dark font-semibold">e. <span class="">Fill New Attachment Form Articles of Association: </span></span>
              </h1>
              <span>By clicking this link, applicant can attach the Articles of Association in PDF format.
However, if Table-A has been opted at the time of entry in the data input form,
attachment of article is not required and in case of combined process, articles of
association is auto-generated.</span>
            </li>
            <li>
              <h1 class="flex my-4 py-2">
                <span class="text-primary-dark font-semibold">f. <span class="">Fill New Attachment Form Memorandum of Association: </span></span>
              </h1>
              <span>By clicking this link, applicant can attach the Memorandum of Association in PDF
format. In case of combined incorporation process memorandum of association is auto-generated on selection of principal line of business/sector</span>
              <br>
              <small>Note: Please note that all the above mentioned PDF file names should be short, without
                spaces, and should not contain any special characters.
              </small>
            </li>
            <li>
              <h1 class="flex my-4 py-2">
                <span class="text-primary-dark font-semibold">g. <span class="">Fill New Bank Challan:</span></span>
              </h1>
              <span>By clicking this link, bank challan will be displayed. Bank Challan is automatically
populated with prescribed fee and other information by the eServices application on
the basis of authorized capital and filing fee. Then Press Save Form button to save
challan form.
</span><br>
              <span class="text-primary-dark font-semibold">Please note that do not print and pay challan before submitting the process/form.</span>
            </li>
            <li>
              <h1 class="flex my-4 py-2">
                <span class="text-primary-dark font-semibold">h. <span class="">Sign Forms using PIN:</span></span>
              </h1>
              <span>Forms are signed using the Personal Identification Number (PIN). Please note that
every subscriber needs to sign the documents by logging in user ID and entering their
respective PIN. After all subscribers have signed forms with their respective PIN,
“Submit to SECP” button will become active. By click this button, all the documents
will be submitted to the SECP and a process reference number will be displayed. Please
keep this reference number for any future correspondence, if required.
</span>
            </li>
            <li>
              <h1 class="flex my-4 py-2">
                <span class="text-primary-dark font-semibold">i. <span class="">Make Payment:</span></span>
              </h1>
              <ul class="list-none ps-8 normal-case">
                <li>
                  <h1 class="flex my-4 py-2">
                    <span class="text-primary-dark font-semibold">Payment through Challan:</span>
                  </h1>
                  <span>Click on Submitted Processes link. Documents submitted along with bank challan will
be displayed. Click and open challan and then press Print. Four copies will
automatically be printed as original copy, applicant copy, bank copy and branch copy.
The fee shall be deposited in the Bank branch selected by the applicant from the
designated branches of MCB Bank Limited/United Bank Limited. On payment, the
bank shall retain the branch and bank copies and return remaining two copies (original
and applicant copy) to the client. </span>
                </li>
                <li>
                  <h1 class="flex my-4 py-2">
                    <span class="text-primary-dark font-semibold">Payment through Credit Card:</span>
                  </h1>
                  <span>
                To facilitate investors and speed up processing time of transactions in eServices, SECP
has introduced online payment of fee through Credit Cards. This facility is only
available to depositors/applicants using eServices online submission option of SECP
and transact through eServices portal. To make payment through Credit Card, click on
“Online Payment” link, then select the relevant check box under “Make Payment” and
follow procedure. <br><br>
                For obtaining further information regarding payment of fee through Credit Cards,
please visit SECP website and see Online Payment Guide available on the eServices
page at <a href="https://www.secp.gov.pk/document/eservices-online-payment-guide/?wpdmdl=17369" class="text-primary-dark hover:underline" target="_blank"> https://www.secp.gov.pk/document/eservices-online-payment-guide/?wpdmdl=17369</a>
              </span>
                </li>
                <li>
                  <h1 class="flex my-4 py-2">
                    <span class="text-primary-dark font-semibold">Payment through 1LINK Banking Network</span>
                  </h1>
                  <span>In order to further facilitate the SECP has enhanced the payment option by introducing
1link payment facility. Now fee can be paid through internet banking, mobile banking,
ATM, easy paisa using 1LINK network. The applicant has to select SECP as a biller
after login to internet banking or after login to ATM machine. </span>
                </li>
                <li>
                  <h1 class="flex my-4 py-2">
                    <span class="text-primary-dark font-semibold">Payment through MCB Online Fund Transfer Facility</span>
                  </h1>
                  <span>The SECP has also arranged with MCB Bank Limited an “On-line Fund Transfer
(OFT)” facility to pay SECP fee directly into SECP’s bank account in MCB through
on-line fund transfer from applicant’s MCB Bank account, without the need to visit a
branch for physically depositing the amounts. This facility is only available to
depositors/applicants using eServices online submission option of SECP and transact
through eServices portal. <br><br>For obtaining further information regarding MCB OFT Facility, please visit SECP
website and see Online Fund Transfer Facility Guidelines available on the main page.<br><br>
              <a href="https://eservices.secp.gov.pk/eServices/" class="text-primary-dark hover:underline" target="_blank">https://eservices.secp.gov.pk/eServices/</a>
              </span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <div class="px-4 pt-4">
        <h1 class="flex items-center my-4 py-2 abc w-[630px]">
          <img src="@/assets/images/heading-line.png" class="h-[25px]" >
          <span class="text-primary-dark font-semibold pl-2">Additional documents in case of foreign national as director /subscriber:</span>
        </h1>
        <span class=""> In case a foreign national individual or a foreign entity is a shareholder in proposed company
following additional documents are required for security clearance. </span>
        <ul class="pb-4 pt-4 list-decimal ps-8 normal-case">
          <li>An undertaking on a prescribed format available on SECP website (in original) stating that
          in case security clearance in not provided by the concerned department the member shall
            transfer shares.</li>
          <li>Five copies of CV/bio data of all foreigners (including nationality, country of origin, local
          and foreign address, local and foreign contact number, Father’s Name) along with passport
            size photographs.</li>
          <li>Profile of foreign company, list of its directors (along with their nationality and country of
            origin) & certified copies of its statute and certificate of incorporation.</li>
          <li>BOD resolution of the foreign company specifying its intention to incorporate a company
          in Pakistan with proposed shareholding and nomination of a person who will represent the
            foreign company.</li>
        </ul>
        <h1 class="flex items-center my-4 py-2 abc w-[280px]">
          <img src="@/assets/images/heading-line.png" class="h-[25px]" >
          <span class="text-primary-dark font-semibold pl-2">Certificate of incorporation:</span>
        </h1>
        <span class="font-normal"> On successful submission of process and payment of requisite fee, the documents are
processed by the relevant Company Registration Office (CRO) within four hours of receipt
of documents. Certificate of incorporation is issued by the Registrar concerned and also
being sent through email. </span>
        <h1 class="flex items-center my-4 py-2 abc w-[600px]">
          <img src="@/assets/images/heading-line.png" class="h-[25px]" >
          <span class="text-primary-dark font-semibold pl-2">One window facility for company incorporation and NTN registration</span>
        </h1>
        <span class="font-normal"> Data collected by the SECP is sent to FBR for registration of NTN. User ID password and
PIN generated by FBR is sent on the email address and cell number of Chief Executive of
the company as soon as the registration is completed at FBR. </span>
      </div>

    </div>
  </section>
</template>
