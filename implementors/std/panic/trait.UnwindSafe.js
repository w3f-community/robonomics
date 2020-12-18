(function() {var implementors = {};
implementors["ipci_runtime"] = [{"text":"impl UnwindSafe for BlockHashCount","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Version","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RuntimeBlockLength","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RuntimeBlockWeights","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DepositBase","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DepositFactor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaxSignatories","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UncleGenerations","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EpochDuration","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IndexDeposit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaxLocks","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WeightToFee","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SessionKeys","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DisabledValidatorsThreshold","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SessionsPerEra","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BondingDuration","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SlashDeferDuration","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RewardCurve","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaxNominatorRewardedPerValidator","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ElectionLookahead","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaxIterations","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MinSolutionScoreBump","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OffchainSolutionWeightLimit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WindowSize","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReportLatency","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BasicDeposit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FieldDeposit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SessionDuration","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImOnlineUnsignedPriority","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StakingUnsignedPriority","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OffencesWeightSoftLimit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Runtime","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Origin","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PalletInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GenesisConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !UnwindSafe for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Event","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OriginCaller","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Call","synthetic":true,"types":[]},{"text":"impl UnwindSafe for STAKE_HOLDERS","synthetic":true,"types":[]}];
implementors["node_cli"] = [{"text":"impl UnwindSafe for Cli","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RunCmd","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Subcommand","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Extensions","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RobonomicsFamily","synthetic":true,"types":[]}];
implementors["node_rpc"] = [{"text":"impl&lt;C, F, P&gt; !UnwindSafe for LightDeps&lt;C, F, P&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for BabeDeps","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !UnwindSafe for GrandpaDeps&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C, P, SC, B&gt; !UnwindSafe for FullDeps&lt;C, P, SC, B&gt;","synthetic":true,"types":[]}];
implementors["pallet_robonomics_datalog"] = [{"text":"impl&lt;T&gt; UnwindSafe for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Moment, Record&gt; UnwindSafe for RawEvent&lt;AccountId, Moment, Record&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Moment: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Record: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Record: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_launch"] = [{"text":"impl&lt;T&gt; UnwindSafe for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Parameter&gt; UnwindSafe for RawEvent&lt;AccountId, Parameter&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Parameter: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Parameter: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_liability"] = [{"text":"impl&lt;T&gt; UnwindSafe for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, LiabilityIndex, TechnicalParam, EconomicalParam, TechnicalReport&gt; UnwindSafe for RawEvent&lt;AccountId, LiabilityIndex, TechnicalParam, EconomicalParam, TechnicalReport&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;EconomicalParam: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;LiabilityIndex: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;TechnicalParam: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;TechnicalReport: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Liability as Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;&gt;::Index: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Liability: Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Economics as Economical&gt;::Parameter: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Parameter: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Liability as Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;&gt;::Proof: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Report: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Communism","synthetic":true,"types":[]},{"text":"impl&lt;T, A&gt; UnwindSafe for OpenMarket&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, E, V, A, I&gt; UnwindSafe for SignedLiability&lt;T, E, V, A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Economical&gt;::Parameter: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Technical&gt;::Parameter: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for AppProofSigner&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for ProofSigner&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PureIPFS","synthetic":true,"types":[]}];
implementors["pallet_robonomics_rws"] = [{"text":"impl&lt;T&gt; UnwindSafe for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; UnwindSafe for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Call: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Lookup: StaticLookup,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Lookup as StaticLookup&gt;::Source: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["robonomics_cli"] = [{"text":"impl UnwindSafe for IoCmd","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SinkCmd","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SourceCmd","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["robonomics_io"] = [{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["robonomics_parachain_runtime"] = [{"text":"impl UnwindSafe for SessionKeys","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BlockHashCount","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Version","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RuntimeBlockLength","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RuntimeBlockWeights","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DepositBase","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DepositFactor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaxSignatories","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IndexDeposit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaxLocks","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BasicDeposit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FieldDeposit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaxScheduledPerBlock","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ProposalBond","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SpendPeriod","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Burn","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DataDepositPerByte","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TreasuryModuleId","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaximumReasonLength","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BountyUpdatePeriod","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BountyCuratorDeposit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BountyValueMinimum","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BountyDepositBase","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BountyDepositPayoutDelay","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CandidacyBond","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VotingBond","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TermDuration","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DesiredMembers","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DesiredRunnersUp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ElectionsPhragmenModuleId","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RococoLocation","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RococoNetwork","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RelayChainOrigin","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Ancestry","synthetic":true,"types":[]},{"text":"impl UnwindSafe for XcmConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TotalBandwidth","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WeightLimit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PointsLimit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Runtime","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Origin","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PalletInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GenesisConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !UnwindSafe for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Event","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OriginCaller","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Call","synthetic":true,"types":[]},{"text":"impl UnwindSafe for STAKE_HOLDERS","synthetic":true,"types":[]}];
implementors["robonomics_protocol"] = [{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Message","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DiscoveryMessage","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for PubSub","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Robonomics","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for RecordCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Datalog&gt;::Record: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for NewRecordEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Datalog&gt;::Record: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for EreaseCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for ErasedEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; UnwindSafe for DatalogStore&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for LaunchCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Launch&gt;::Parameter: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for NewLaunchEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Launch&gt;::Parameter: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["robonomics_runtime"] = [{"text":"impl UnwindSafe for BlockHashCount","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Version","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RuntimeBlockLength","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RuntimeBlockWeights","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IndexDeposit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MaxLocks","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SessionKeys","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EpochDuration","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TotalBandwidth","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WeightLimit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PointsLimit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Runtime","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Origin","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PalletInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GenesisConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !UnwindSafe for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Event","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OriginCaller","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Call","synthetic":true,"types":[]}];
implementors["substrate_ros_api"] = [{"text":"impl&lt;P, Client&gt; !UnwindSafe for Author&lt;P, Client&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Client, Block&gt; UnwindSafe for FullChain&lt;Client, Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;BE, Client, Block&gt; UnwindSafe for FullState&lt;BE, Client, Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BE: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;B, H&gt; !UnwindSafe for System&lt;B, H&gt;","synthetic":true,"types":[]}];
implementors["substrate_ros_msgs"] = [{"text":"impl UnwindSafe for TriggerRes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TriggerReq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Trigger","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StorageSizeRes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetBlockHeaderReq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StorageKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StorageKeysReq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetBlockHashReq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetBestHeadReq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SystemHealthReq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExHash","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StorageKeysRes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SystemHealthRes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PendingExtrinsicsRes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PendingExtrinsicsReq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RawExtrinsic","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RemoveExtrinsicReq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StorageSizeReq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RemoveExtrinsicRes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StorageHashRes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StorageHashReq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetFinalizedHeadRes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SubmitExtrinsicRes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SystemHealthInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetFinalizedHeadReq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StorageQueryRes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetBlockHashRes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BlockHash","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetBestHeadRes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetBlockHeaderRes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetBlockReq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StateCallRes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StorageQueryReq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StateCallReq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetBlockRes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SubmitExtrinsicReq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StorageSize","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetBlockHeader","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetFinalizedHead","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetBestHead","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StorageKeys","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SubmitExtrinsic","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetBlockHash","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetBlock","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PendingExtrinsics","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StorageHash","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StorageQuery","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StateCall","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RemoveExtrinsic","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SystemHealth","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Bool","synthetic":true,"types":[]},{"text":"impl UnwindSafe for String","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UInt64","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Time","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()